import { WarningCircle, ArrowClockwise } from "@phosphor-icons/react";
// Error fallback component
import { Button } from "./components/ui/button";

interface FallbackProps {
  error: unknown;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  // When encountering an error in the development mode, rethrow it and don't display the boundary.
  // The parent UI will take care of showing a more helpful dialog.
  if (typeof import.meta !== "undefined" && import.meta.env?.DEV) throw error;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900 dark:bg-red-900/20 dark:text-red-200">
          <div className="flex items-center gap-2 mb-2">
            <WarningCircle size={20} />
            <h5 className="font-medium">Une erreur est survenue</h5>
          </div>
          <div className="text-sm opacity-90">
             Une erreur inattendue s'est produite. Veuillez rafraîchir la page ou réessayer plus tard.
          </div>
        </div>

        <div className="bg-card border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">
            Error Details:
          </h3>
          <pre className="text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32">
            {error instanceof Error ? error.message : "Unknown error"}
          </pre>
        </div>

        <Button
          onClick={resetErrorBoundary}
          className="w-full"
          variant="outline"
        >
          <ArrowClockwise />
          Try Again
        </Button>
      </div>
    </div>
  );
};
