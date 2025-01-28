export interface Dataset {
  id: number;
  name: string;
  type: Types;
  status: Status;
  createdAt: string;
  creator: string;
  email: string;
}

export type Types = "AEP" | "DOCX" | "FIG" | "JPG" | "MP4" | "PDF";

export type Status = "connected" | "error" | "uploaded";
