import { AlertTriangleIcon, RefreshCwIcon } from "lucide-react";
import type { FallbackProps } from "react-error-boundary";
import { Button } from "./components/ui/button";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  // En développement, on relance l'erreur pour bénéficier de l'overlay Vite.
  if (import.meta.env.DEV) throw error;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/5 p-4 text-destructive">
          <AlertTriangleIcon className="mt-0.5 size-5 shrink-0" />
          <div>
            <p className="font-semibold">Une erreur est survenue</p>
            <p className="mt-1 text-sm text-destructive/90">
              Un problème inattendu a interrompu l'application. Vous pouvez
              recharger la page&nbsp;; si l'erreur persiste, contactez SOGECOR.
            </p>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">
            Détails de l'erreur
          </h3>
          <pre className="text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>

        <Button
          onClick={resetErrorBoundary}
          className="w-full"
          variant="outline"
        >
          <RefreshCwIcon />
          Réessayer
        </Button>
      </div>
    </div>
  );
};
