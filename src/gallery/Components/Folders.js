import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Folders.css';
import {Link} from 'react-router-dom';
import axios from "axios";
//import {getGallery} from '../ApiHandling/GetImages'

// const slideData = [
//   {
//     title: '25th Anniversary',
//     description : "This is first folder",
//     images:[
//       "https://3gdoctor.files.wordpress.com/2014/07/networking-session-at-doctors-20-and-you-2014.png",
//       "https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/1200x675-fb-e-twitter-medical.jpg",
//       "https://www.aljazeera.com/wp-content/uploads/2020/09/f4fbce97d0d64f81b1a4e8c7f9ddb00f_18.jpeg",
//       "https://www.northstarmeetingsgroup.com/uploadedImages/Articles/How_To/Research_and_White_Papers/medical-meetings-ashfield.jpg?width=920&scale=both&mode=crop",
//       "https://3gdoctor.files.wordpress.com/2014/07/networking-session-at-doctors-20-and-you-2014.png",
//       "https://www.aljazeera.com/wp-content/uploads/2020/09/f4fbce97d0d64f81b1a4e8c7f9ddb00f_18.jpeg",
//       "https://events.amongdoctors.com/img/header.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//     ]
//   },
//   {
//     title: 'In The Wilderness',
//     description : "This is Second folder",
//     images:[
//       "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//       "https://www.aljazeera.com/wp-content/uploads/2020/09/f4fbce97d0d64f81b1a4e8c7f9ddb00f_18.jpeg",
//       "https://events.amongdoctors.com/img/header.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//     ]
//   },
//   {
//     title: 'For Your Current Mood',
//     description : "This is Third folder",
//     images:[
//       "https://www.northstarmeetingsgroup.com/uploadedImages/Articles/How_To/Research_and_White_Papers/medical-meetings-ashfield.jpg?width=920&scale=both&mode=crop",
//       "https://3gdoctor.files.wordpress.com/2014/07/networking-session-at-doctors-20-and-you-2014.png",
//       "https://www.aljazeera.com/wp-content/uploads/2020/09/f4fbce97d0d64f81b1a4e8c7f9ddb00f_18.jpeg",
//       "https://events.amongdoctors.com/img/header.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//     ]
//   },
//   {
//     title: 'Focus On The Writing',
//     description : "This is Fourth folder",
//     images:[
//       "https://www.aljazeera.com/wp-content/uploads/2020/09/f4fbce97d0d64f81b1a4e8c7f9ddb00f_18.jpeg",
//       "https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/1200x675-fb-e-twitter-medical.jpg",
//       "https://www.northstarmeetingsgroup.com/uploadedImages/Articles/How_To/Research_and_White_Papers/medical-meetings-ashfield.jpg?width=920&scale=both&mode=crop",
//       "https://3gdoctor.files.wordpress.com/2014/07/networking-session-at-doctors-20-and-you-2014.png",
//       "https://www.aljazeera.com/wp-content/uploads/2020/09/f4fbce97d0d64f81b1a4e8c7f9ddb00f_18.jpeg",
//       "https://events.amongdoctors.com/img/header.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//       "http://4.bp.blogspot.com/-AuLr--jwwh0/UjHI4vxdF2I/AAAAAAAAAO8/lZ0ogr1V-Xs/s1600/Traumatic+Event.jpg",
//     ]
//   }
// ]

export default class Folders extends Component {
  constructor(props){
    super(props)
    this.state = {
      galleryData : [], 
      clicked : false
    };
  }

  async componentDidMount(){
    await axios
      .get('https://nimaaaa-project.herokuapp.com/gallery')
      .then((response) => {
        // console.log("api Incoming", response.data)
        this.setState({
          galleryData:response.data
        }, ()=> console.log("The Array Needed",response.data))          
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleClick = () =>{
  //   this.setState({
  //     clicked:true
  //   })
  // }
  
  renderFolders = () =>{
    return(
      this.state.galleryData.length>0 ? <> 
    {this.state.galleryData.map((data,index)=>(
      <div className="col-sm-4 col-xs-12 Folder_col">
      <div class="card">
        <figure class="card__thumbnail">
          <img className="Folder_img" src={data.images[0]} />
          <div className="card__title">
            {data.title}
            <div>
                <Link
                  className=""
                  to={{
                    pathname: "/allimages",
                    state: {images:data},
                  }}
                >
                  <button className="Folder_button" value={index} >View More</button>
                </Link>
            </div>
          </div>
        </figure>
      </div>  
  </div>
    ))}</> : null)
  }

  render() 
  {

   

    return (
      
        <div>
      <div className="container Folders_container">
        <div className="Folder_title"> Gallery</div>
        <div className="row">
        {this.renderFolders()}
        </div>
      </div>
      </div>
    )
  }
}




