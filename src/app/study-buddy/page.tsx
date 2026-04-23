import { Bot, SendHorizontal } from "lucide-react";

export default function StudyBuddyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Study Buddy (UI Placeholder)</h1>
      <p className="text-slate-300">Designed for future Azure AI Foundry / PydanticAI integration.</p>

      <div className="card grid h-[65vh] grid-rows-[auto_1fr_auto] overflow-hidden">
        <div className="border-b border-slate-800 p-4 text-sm text-slate-300">Connection: Not configured • Endpoint: Azure AI Foundry Agent Runtime</div>
        <div className="space-y-3 p-4">
          <div className="max-w-xl rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm">Hi, I can help you revise AB-900 topics once backend is connected.</div>
          <div className="ml-auto max-w-xl rounded-xl bg-sky-900/40 p-3 text-sm">Great. Start with responsible AI principles.</div>
          <div className="flex max-w-xl gap-2 rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm"><Bot className="mt-1 h-4 w-4 text-sky-300" />I will support explainers, quiz mode, and weak-area drilldowns.</div>
        </div>
        <div className="border-t border-slate-800 p-4">
          <div className="flex gap-2">
            <input disabled placeholder="Type your question (disabled until backend integration)..." className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm" />
            <button disabled className="rounded-lg bg-slate-800 px-3 text-slate-300"><SendHorizontal className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
