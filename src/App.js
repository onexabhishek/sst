import { Alert, Container, Stack, Typography } from '@mui/material';
import Transcript from './components/Transcript';
import MicComponent from './components/MicComponent';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from 'react';
import commands from './commands';

function App() {
  const { listening, transcript, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable, interimTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!isMicrophoneAvailable) {
      SpeechRecognition.stopListening()
    }
  }, [isMicrophoneAvailable])
  return (
    <Container fixed sx={{ padding: 2 }}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant="h3">Real-time Speech to text Transcriber</Typography>
        <Typography variant="body2">Utilizing chrome's WebSpeech API, react-speech-recognition, and Material UI to transcribe speech in real-time.</Typography>
        {!browserSupportsSpeechRecognition && <Alert severity="warning">
          Your browser is not supporting Speech recogniztion.
        </Alert>}
        {!isMicrophoneAvailable && !listening && <Alert severity="error">
          Please Check your microphone
        </Alert>}
        <Transcript transcript={transcript} />
        <MicComponent listening={listening} browserSupportsSpeechRecognition={browserSupportsSpeechRecognition} resetTranscript={resetTranscript} interimTranscript={interimTranscript} />
      </Stack>
    </Container>
  );
}

export default App;
