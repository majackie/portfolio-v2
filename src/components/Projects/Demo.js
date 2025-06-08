function Demo({ src, alt }) {
  return (
    <div className="mt-1 flex justify-center">
      <video
        autoPlay
        muted
        loop
        disableRemotePlayback
        playsInline
        className="max-h-[65vh] border border-black rounded-lg dark:border-gray-800"
        alt={alt}
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Demo;
