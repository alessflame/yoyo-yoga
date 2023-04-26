import { defineStore } from "pinia";
import { getVideos } from "../api/getApi";

export const useVideosStore = defineStore("videos", {
    state: () => ({ videos: [], favorites: [], comments:[
      {name:"Stefano", content:"Davvero un bel video, grazie!", youtubeId:"PPkLpLts2hY"}
    ], filterValue:"" }),
    getters: {      
        filterVideos(state){
          if(state.videos.length===0 || !state.filterValue) return state.videos;
            const filteredVideos = state.videos.filter((item)=>item.title.toLowerCase().includes(state.filterValue.toLowerCase()));
            return filteredVideos;
          }
    },

    actions: {
       //videos
        async addVideos() {
          const videos= await getVideos();
        //   console.log(request.data);
          this.videos = [...videos];
        },

        //favorites
        addToFavorites(item){
        if(this.favorites.find((elem)=> elem.youtubeId === item.youtubeId)) return;
         this.favorites.push(item);
        },
        emptyFavorites(){
          this.favorites=[];
        },
        deleteFromFavorites(id){
         this.favorites= [...this.favorites.filter((item)=> item.youtubeId !== id)];
        },

        //filterValue
        setFilterValue(value){
          this.filterValue=value;
          console.log(this.filterValue);
        },

        //comments
        addComment(value){
        this.comments.push(value);
        }

    },

});
