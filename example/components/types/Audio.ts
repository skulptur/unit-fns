import { Tuple } from '../lib/types/lib'

export interface AudioChannel extends Float32Array {}

export interface StereoAudioChannels extends Tuple<Float32Array, Float32Array> {}
