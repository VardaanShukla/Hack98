# Hack98
# 🎙️ Speech Emotion Recognition using Wav2Vec2

This project uses Facebook's pre-trained [Wav2Vec2](https://huggingface.co/facebook/wav2vec2-base) model to recognize emotions from speech audio. It works with the TESS (Toronto Emotional Speech Set) dataset and supports both real-time audio recording and file upload for emotion classification.

---

## 📂 Dataset

- **Source**: [TESS - Toronto emotional speech set](https://www.kaggle.com/datasets/ejlok1/toronto-emotional-speech-set-tess/data)
- **Structure**: `.wav` audio files organized by emotion labels inferred from filenames.

---

## 🧠 Model

- **Pretrained Model**: `facebook/wav2vec2-base`
- **Fine-Tuned**: For multi-class emotion classification.
- **Labels**: `['angry', 'disgust', 'fear', 'happy', 'neutral', 'ps', 'sad']` *(depending on dataset variation)*

---

## 🛠️ Features

- Waveform and spectrogram visualization using `librosa`
- Preprocessing and padding audio inputs
- Custom PyTorch `Dataset` class
- Model training using HuggingFace's `Trainer`
- Evaluation with `accuracy`, `precision`, `recall`, `f1-score`
- Predict emotion from:
  - 🎤 Recorded audio via microphone
  - 📁 Uploaded `.wav` file

---

## 🔧 Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/speech-emotion-recognition.git
cd speech-emotion-recognition
