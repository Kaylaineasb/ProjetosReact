import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { Camera } from 'expo-camera';


export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const snap = async () => {
    if (camera) {
      if (photo) {
        // Se já existe uma foto, descarte-a
        URL.revokeObjectURL(photo);
      }

      const photo = await camera.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      {photo ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: photo }} style={{ flex: 1 }} />
          <Button title="Tirar Outra Foto" onPress={snap} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Camera
            ref={(ref) => setCamera(ref)}
            style={{ flex: 1 }}
            type={Camera.Constants.Type.back}
            ratio="16:9"
          />
          <Button title="Tirar Foto" onPress={snap} />
        </View>
      )}
    </View>
  );
}