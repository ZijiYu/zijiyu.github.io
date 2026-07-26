---
title: "Research"
permalink: /research/
author_profile: true
---

My research focuses on reliable multimodal systems for specialized, knowledge-sparse domains. Traditional Chinese painting provides a demanding setting for this work: visual cues are fine-grained, terminology is expert-dependent, and evaluation requires both cultural knowledge and strong evidence grounding.

## Zhihua

### Domain-specific vision-language model for Chinese painting

Co-developed a Qwen2.5-VL-32B model for traditional Chinese painting appreciation using full-parameter supervised fine-tuning, direct preference optimization, and threshold-based retrieval-augmented generation over a corpus of more than 100,000 artworks.

**Selected results:** benchmark score of 0.6719; MMHal hallucination rate reduced from 37.0% to 30.85%; 94.34% Recall@1 in retrieval.

## SILK

### Sparse knowledge, OOD generalization, and zero-shot technique recognition

Co-designed a framework combining continued pre-training, vision-language SFT/RLVR, and inference-time reference augmentation. The accompanying expert-validated benchmark contains 1,014 paintings and 3,042 annotations with explicit in-distribution and out-of-distribution splits.

**Selected results:** 81.37% in-distribution accuracy and a best ID/OOD harmonic mean of 0.482, with zero-shot recognition of unseen painting techniques.

## Domain-Bootstrapped OCR

### Low-resource recognition of historical inscriptions

Built a five-stage domain-adaptation pipeline over 12,000 paintings, beginning with a 942-sample expert-verified seed set and expanding to 4,943 pseudo-labeled samples for olmOCR-2 adaptation.

**Selected results:** F1 of 0.853 on held-out validation and 0.840 on the seed benchmark, outperforming the 0.762 base model and leading general-purpose OCR/VLM baselines.

## ArtFlow

### Training-free agentic painting analysis

Co-developed a retrieval-grounded multi-agent workflow with perception, parallel reasoning, validation, and reflection layers, together with an expert-informed exploration–convergence evaluation pipeline.

**Selected results:** improved GPT-4.1 dimension coverage by 14.1%, exploration-aware coverage by 63.6%, and covered all 15 appraisal dimensions for 73.1% of 199 evaluated paintings.

## Research direction

Across these projects, I study a recurring pipeline: domain data construction → expert validation → model or retrieval adaptation → rigorous evaluation → improved grounding, generalization, and reliability.

Public papers, code, datasets, and demos will be linked here as they become available.
