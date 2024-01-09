import { Card } from '@/components/Card';

export function TrackMetadata() {
  return (
    <Card className="flex flex-col gap-2">
      <span>Album image</span>
      <div className="flex justify-between">
        <span>Title:</span>
        <span>Track Name</span>
      </div>

      <div className="flex justify-between">
        <span>Artist Name:</span>
        <span>Artist Name</span>
      </div>

      <div className="flex justify-between">
        <span>Key:</span>
        <span>Key</span>
      </div>

      <div className="flex justify-between">
        <span>Tempo:</span>
        <span>Moderato</span>
      </div>

      <div className="flex justify-between">
        <span>BPM:</span>
        <span>117.8</span>
      </div>

      <div className="flex justify-between">
        <span>ISRC Code:</span>
        <span>FR6V80732824</span>
      </div>
    </Card>
  );
}
