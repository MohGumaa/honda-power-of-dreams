import video1 from "../../assets/video1.mp4"

const Background = ({playVideo, currentItem}: any) => {
  if (playVideo) {
    return (
       <video 
        muted 
        autoPlay 
        loop 
        playsInline 
        className="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover -z-10 fade-in background"
      >
        <source src={video1} type="video/mp4"/>
      </video>
    )
  } else {
    return (
      <img key={currentItem.id} src={currentItem.src} alt={currentItem.title} className="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover -z-10 fade-in background"/>
    )
  }
}

export default Background
