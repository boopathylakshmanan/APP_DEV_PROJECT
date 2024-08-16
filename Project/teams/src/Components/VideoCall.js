import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import CallEndIcon from '@mui/icons-material/CallEnd';

const VideoCall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    if (isCallActive) {
      navigator.mediaDevices.getUserMedia({ video: isVideoOn, audio: isAudioOn })
        .then(stream => {
          localStreamRef.current = stream;
          localVideoRef.current.srcObject = stream;
        })
        .catch(error => console.error('Error accessing media devices.', error));
    } else {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  }, [isCallActive, isVideoOn, isAudioOn]);

  const toggleVideo = () => {
    setIsVideoOn(prev => !prev);
    if (localStreamRef.current) {
      localStreamRef.current.getVideoTracks().forEach(track => track.enabled = !isVideoOn);
    }
  };

  const toggleAudio = () => {
    setIsAudioOn(prev => !prev);
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach(track => track.enabled = !isAudioOn);
    }
  };

  const startCall = () => setIsCallActive(true);
  const endCall = () => setIsCallActive(false);

  return (
    <Box textAlign="center" p={2} position="relative">
      <Typography variant="h4" gutterBottom>Video Call Component</Typography>
      {isCallActive ? (
        <Box position="relative">
          <Box
            sx={{
              width: '100%',
              height: 0,
              paddingBottom: '56.25%',
              position: 'relative',
              bgcolor: 'grey.300',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <video
              ref={remoteVideoRef}
              autoPlay
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box
            sx={{
              width: '25%',
              height: '25%',
              position: 'absolute',
              bottom: 16,
              right: 16,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              bgcolor: 'grey.300'
            }}
          >
            <video
              ref={localVideoRef}
              autoPlay
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box mt={2}>
            <IconButton onClick={toggleVideo} color="primary">
              {isVideoOn ? <VideocamIcon /> : <VideocamOffIcon />}
            </IconButton>
            <IconButton onClick={toggleAudio} color="primary">
              {isAudioOn ? <MicIcon /> : <MicOffIcon />}
            </IconButton>
            <IconButton onClick={endCall} color="secondary">
              <CallEndIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Button variant="contained" color="primary" onClick={startCall}>
          Start Call
        </Button>
      )}
    </Box>
  );
};

export default VideoCall;