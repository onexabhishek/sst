import { Box, Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SpeechRecognition from "react-speech-recognition";
import {RecordVoiceOver, Delete, MicOff } from "@mui/icons-material";
import { Stack } from "@mui/system";

export default function MicComponent({
  listening,
  resetTranscript,
  browserSupportsSpeechRecognition,
  interimTranscript,
}) {
  return (
    <Stack
      sx={{ py: 2 }}
      direction={"row"}
      spacing={2}
      justifyContent={"end"}
      alignItems={"center"}
    >
      {listening && (
        <Stack direction={"row"} columnGap={2}>
          <RecordVoiceOver color={listening && "error"} />
          {!interimTranscript ? 'Listening...': interimTranscript}
        </Stack>
      )}
      <Button
        variant="outlined"
        startIcon={listening ? <MicOff /> : <MicIcon />}
        onClick={() =>
          listening
            ? SpeechRecognition.stopListening()
            : SpeechRecognition.startListening({ continuous: true })
        }
        disabled={!browserSupportsSpeechRecognition}
      >
        {listening ? "Stop" : "Start"}
      </Button>
      <Button
        variant="outlined"
        disabled={!listening}
        onClick={() => resetTranscript()}
        startIcon={<Delete />}
      >
        Reset
      </Button>
    </Stack>
  );
}
