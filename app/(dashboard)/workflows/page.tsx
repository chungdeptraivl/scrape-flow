"use client";

import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Workflow } from "@/types/Workflows";
import { AlertCircle } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

function WorkflowPage() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserworkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

function UserworkflowsSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  );
}

function UserWorkflows() {
  const [workflows, setWorkflows] = useState<Workflow[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetWorkflowsForUser();

        if (!data) {
          setError(true);
        } else {
          setWorkflows(data);
        }
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Alert variant={"destructive"}>
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong, Please try again later
        </AlertDescription>
      </Alert>
    );
  }

  if (!workflows) {
    return <UserworkflowsSkeleton />;
  }

  return <div></div>;
}

export default WorkflowPage;
