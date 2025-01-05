export interface Workflow {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  definition: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
