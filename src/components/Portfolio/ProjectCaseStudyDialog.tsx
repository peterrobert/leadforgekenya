import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ProjectCaseStudyDialogProps {
  project: {
    title: string;
    category: string;
    description: string;
    whatWasBuilt: string[];
    tech: string[];
    longDescription?: string;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectCaseStudyDialog({
  project,
  open,
  onOpenChange,
}: ProjectCaseStudyDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-forge-orange border-forge-orange/30 bg-forge-orange/5">
              {project.category}
            </Badge>
          </div>
          <DialogTitle className="text-3xl font-display font-bold text-forge-navy">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-forge-gray mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-8 py-6">
          <section>
            <h4 className="text-lg font-display font-semibold text-forge-navy mb-4">
              Project Overview
            </h4>
            <p className="text-forge-gray leading-relaxed">
              {project.longDescription || "We worked closely with the client to deliver a solution that not only looks great but performs exceptionally. The project focused on user experience, technical efficiency, and achieving specific business goals."}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h4 className="text-lg font-display font-semibold text-forge-navy mb-4">
                What Was Built
              </h4>
              <ul className="space-y-3">
                {project.whatWasBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-forge-gray capitalize">
                    <CheckCircle2 className="h-4 w-4 text-forge-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-display font-semibold text-forge-navy mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-forge-navy/5 text-forge-navy">
                    {t}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          <section>
            <h4 className="text-lg font-display font-semibold text-forge-navy mb-4">
              Screenshots
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png" />
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}