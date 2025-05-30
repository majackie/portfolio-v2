function Demo({ src, alt }) {
  return (
    <div className="border border-black rounded dark:border-gray-800 m1 mb-1">
      <video
        autoPlay
        muted
        loop
        disableRemotePlayback
        playsInline
        className="w-full max-w-lg rounded"
        alt={alt}
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Demo;
