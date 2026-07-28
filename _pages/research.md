---
title: "Research"
permalink: /research/
author_profile: true
---

My research focuses on trustworthy and retrieval-grounded multimodal learning for specialized, knowledge-sparse domains. Traditional Chinese painting provides a demanding setting: visual cues are fine-grained, terminology is expert-dependent, and reliable analysis requires both cultural knowledge and inspectable evidence.

## Zhihua

### Domain-specific vision-language model for Chinese painting

Curated and mined a multi-source corpus of more than 100,000 traditional Chinese paintings; developed image-QA generation and refinement pipelines; constructed preference pairs for direct preference optimization; contributed to fine-tuning and evaluating a Qwen2.5-VL model variant; and implemented the retrieval-augmented generation pipeline.

**Selected results:** top overall benchmark score of 65.8 versus 57.7 for the strongest general-purpose baseline; first place in seal recognition and hallucination detection; user ratings of 4.35/5 for accuracy and 4.19/5 for satisfaction (n=75).

**Manuscript:** *Zhihua: Leveraging Vision Language Models for Traditional Chinese Painting Appreciation and Storytelling* — revise and resubmit at *Heritage Science*.

**Model:** [zjuqx/ZhiHua](https://huggingface.co/zjuqx/ZhiHua)

## Local-to-Global Visual Retrieval and Grounding

### Inspectable evidence for painting question answering

Developed a two-stage system combining patch-level vector retrieval with LightGlue reranking; built a top-k inspection interface; and integrated local- and artwork-level evidence into painting question answering.

The system maps partial painting crops to their source artworks and regions, providing inspectable evidence for retrieval-grounded responses.

## SILK

### Sparse knowledge, OOD generalization, and zero-shot technique recognition

Built an expert-validated ID/OOD benchmark containing 1,014 paintings and 3,042 annotations across 12 seen and 11 held-out painting techniques. Contributed to continued pre-training, full-parameter SFT/RLVR, and inference-time reference augmentation.

**Selected results:** 81.37% in-distribution accuracy and a best ID/OOD harmonic mean of 0.482, with zero-shot recognition of unseen painting techniques.

**Manuscript:** *SILK: A Sparse Domain Knowledge Learning Framework for Traditional Chinese Painting Technique Recognition* — submitted to AAAI 2027.

## Domain-Bootstrapped OCR

### Low-resource recognition of historical inscriptions

Built a five-stage adaptation pipeline spanning multi-model candidate generation, expert verification, filtered pseudo-labeling, and retraining. Created a 942-sample expert-verified seed set and retained 4,943 pseudo-labeled samples from a corpus of 12,000 paintings.

**Selected results:** F1 scores of 0.853 on validation and 0.840 on the seed benchmark, compared with 0.810 and 0.762 for the base model; ablations confirmed gains from increasing pseudo-labeled data.

**Manuscript:** *Domain-Bootstrapped OCR for Low-Resource Traditional Chinese Painting Inscriptions* — in preparation.

## ArtFlow

### Training-free agentic painting analysis

Implemented components of a retrieval-grounded workflow spanning perception, parallel reasoning, validation, and reflection, and contributed to an expert-informed evaluation covering 1,560 records from 199 paintings.

**Selected results:** improved GPT-4.1 dimension coverage by 14.1%, exploration-aware coverage by 63.6%, and covered all 15 appraisal dimensions for 73.1% of 199 evaluated paintings.

**Manuscript:** *ArtFlow: An Agentic Workflow for Retrieval-Grounded Traditional Chinese Painting Analysis* — submitted to AAAI 2027.

**Code:** [ZijiYu/ArtFlow](https://github.com/ZijiYu/ArtFlow)

## Research direction

Across these projects, I study a recurring pipeline: domain data construction → expert validation → model or retrieval adaptation → rigorous evaluation → improved grounding, generalization, and reliability. I am particularly interested in trustworthy multimodal learning, retrieval-augmented reasoning, open-world recognition, low-resource adaptation, and human-AI collaboration.

Manuscript PDFs are not posted while under review. Public models, code, datasets, and demos will be linked as they become available.
