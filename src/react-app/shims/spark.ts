// Dev-only shim for @github/spark packages
// Provides a localStorage-backed useKV and a fake window.spark.llm for previews.

export function useKV<T>(key: string, initial: T): [T, (updater: (t: T) => T) => void] {
  let value: T
  const raw = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
  if (raw) {
    try { value = JSON.parse(raw) as T } catch { value = initial }
  } else {
    value = initial
  }
  const set = (updater: (t: T) => T) => {
    const next = updater(value)
    value = next
    try { window.localStorage.setItem(key, JSON.stringify(next)) } catch {}
  }
  return [value, set]
}

declare global {
  interface Window {
    spark: {
      llm: (prompt: string, _model?: string, _json?: boolean) => Promise<string>
    }
  }
}

if (typeof window !== 'undefined') {
  window.spark = window.spark || {
    async llm(prompt: string) {
      // Very naive parser to fabricate an email
      const subject = 'Confirmation de rendez-vous – SOGECOR'
      const content = `Bonjour,\n\nMerci pour votre prise de rendez-vous.\n\nDétails:\n${prompt.slice(0, 300)}...\n\nCordialement,\nSOGECOR`
      return JSON.stringify({ subject, content })
    }
  }
}

export {}
