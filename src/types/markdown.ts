export type Section = {
  level: 1 | 2;
  title: string;
  blocks: Array<{ type: "p" | "ul"; html: string | string[] }>;
};

// Utility functions for working with markdown content
export function inlineFormat(text: string): string {
  let t = text;
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/_(.+?)_/g, "<em>$1</em>");
  t = t.replace(/\*(.+?)\*/g, "<em>$1</em>");
  t = t.replace(/\[(.+?)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline">$1</a>');
  return t;
}

export function parseMarkdown(md: string): Section[] {
  const lines = md.split(/\r?\n/);
  const sections: Section[] = [];
  let current: Section | null = null;
  let paraBuf: string[] = [];
  let listBuf: string[] = [];

  const flushPara = () => {
    if (paraBuf.length) {
      current?.blocks.push({ type: "p", html: inlineFormat(paraBuf.join(" ")) });
      paraBuf = [];
    }
  };
  const flushList = () => {
    if (listBuf.length) {
      current?.blocks.push({ type: "ul", html: listBuf.map((i) => inlineFormat(i)) });
      listBuf = [];
    }
  };

  const startSection = (level: 1 | 2, title: string) => {
    flushPara();
    flushList();
    current = { level, title, blocks: [] };
    sections.push(current);
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^#\s+/.test(line)) {
      startSection(1, line.replace(/^#\s+/, ""));
      continue;
    }
    if (/^##\s+/.test(line)) {
      startSection(2, line.replace(/^##\s+/, ""));
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (paraBuf.length) flushPara();
      listBuf.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }
    if (line === "") {
      flushPara();
      flushList();
      continue;
    }
    paraBuf.push(line);
  }
  flushPara();
  flushList();
  return sections;
}
