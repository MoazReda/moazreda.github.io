/**
 * JS port of the Dart tokenizer (translator.dart + vocab.dart).
 * Parity with the Python/Dart outputs is checked by scripts/parity.mjs.
 */
export type Direction = 'franco_to_arabic' | 'arabic_to_franco';

export interface Bundle {
  config: { sos: number; eos: number; pad: number; max_steps: number };
  vocabs: Record<string, string[]>;
  models: Record<Direction, { file: string; normalize_alef: boolean; size_bytes: number }>;
}

// Which vocab is the source and which the target, per direction.
export const VOCABS: Record<Direction, { src: string; tgt: string }> = {
  franco_to_arabic: { src: 'franco_vocab', tgt: 'arabic_vocab' },
  arabic_to_franco: { src: 'rev_source_arabic_vocab', tgt: 'rev_target_franco_vocab' },
};

const SPECIALS = new Set(['<pad>', '<sos>', '<eos>', '<unk>']);

export class Vocab {
  itos: string[];
  stoi: Map<string, number>;
  constructor(itos: string[]) {
    this.itos = itos;
    this.stoi = new Map(itos.map((t, i) => [t, i]));
  }
  // Dart's text.split('') splits UTF-16 code units, and so does JS.
  encode(text: string): number[] {
    const unk = this.stoi.get('<unk>')!;
    return [
      this.stoi.get('<sos>')!,
      ...text.split('').map((c) => this.stoi.get(c) ?? unk),
      this.stoi.get('<eos>')!,
    ];
  }
  decode(ids: ArrayLike<number | bigint>): string {
    let out = '';
    for (let i = 0; i < ids.length; i++) {
      const id = Number(ids[i]);
      if (id < 0 || id >= this.itos.length) continue;
      const tok = this.itos[id];
      if (!SPECIALS.has(tok)) out += tok;
    }
    return out;
  }
}

export function normalizeAlef(s: string): string {
  return s.replace(/[أإآٱ]/g, 'ا');
}

export function prepare(text: string, dir: Direction, bundle: Bundle) {
  const v = VOCABS[dir];
  const src = new Vocab(bundle.vocabs[v.src]);
  const tgt = new Vocab(bundle.vocabs[v.tgt]);
  let input = text.toLowerCase();
  if (bundle.models[dir].normalize_alef) input = normalizeAlef(input);
  return { ids: src.encode(input), tgt };
}
