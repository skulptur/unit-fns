import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const DropArea = styled.div`
  border: 1px solid grey;
  padding: 20px;
`

interface Props {
  onLoad: (data: Float32Array) => void
}

export const Dropzone: React.FC<Props> = ({ onLoad }) => {
  const onDrop = useCallback(
    (files) => {
      const audioContext = new AudioContext()

      const reader = new FileReader()
      reader.onload = function () {
        const arrayBuffer = reader.result as ArrayBuffer

        audioContext.decodeAudioData(arrayBuffer, (decoded) => {
          let typedArray = new Float32Array(decoded.length)
          typedArray = decoded.getChannelData(0)
          onLoad(typedArray)
        })
      }
      reader.readAsArrayBuffer(files[0])
    },
    [onLoad]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <DropArea {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </DropArea>
  )
}
