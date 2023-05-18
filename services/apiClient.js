import Vue from "vue";
import axios from "axios";



const api = axios.create({
  baseURL: "https://localhost:44358/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", 
    "Authorization" : localStorage.getItem("Token"),
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  prependPath: true,
          changeOrigin: true,
});

// Thêm interceptor `onError` vào axios instance
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 404) {
      Vue.notify({
        group: "api",
        title: "Get API Error",
        text: "Không lấy được dữ liệu",
        duration: 5000
      });
    }
    if (error.response && error.response.status === 500) {
      Vue.notify({
        group: "api",
        title: "Get API Error",
        text: "Không lấy được dữ liệu",
        duration: 5000
      });
    }
    return Promise.reject(error);
  }
);

export default {
  logIn(email,password){
    var params ={
      email : email,
      password : password
    }
    return api.post("/Users/login",params)
  }
  ,
  // USER
  getUsers(params) {
    console.log(localStorage.getItem("Token"));
    return api.post("/Admin/PagingUser", params)
  },
  getUserDetail(id) {
    return api.get(`/Admin/GetUserByID?id=${id}`)
  },
  updateUser(id, user) {
    console.log(!user.hasOwnProperty("UserID"));
    
    return api.put(`/Admin/UpdateUser?id=${id}`, user)
  },
  deleteUser(id) {
    return api.delete(`/Admin/DeleteUser?id=${id}`)
  },

  // FILM
  getFilms(params) {
    return api.post("/Admin/PagingFilm", params)
  },
  getFilmDetail(id) {
    return api.get(`/Admin/GetFilmByID?id=${id}`)
  },
  updateFilm(id, film) {
    if(!film.hasOwnProperty("FilmID")){
      return api.post(`/Admin/AddFilm`, film)
    };
    return api.put(`/Admin/UpdateFilm?id=${id}`, film)
  },
  getQuestions(params) {
    return api.post("/Admin/PagingQuestion", params)
  },
  getQuestionDetail(id) {
    return api.get(`/Admin/GetQuestionByID?id=${id}`)
  },
  updateQuestion(id, question) {
    console.log(!question.hasOwnProperty("QuestionID"));
    if(!question.hasOwnProperty("QuestionID")){
      return api.post(`/Admin/AddQuestion`, question)
    };
    return api.put(`/Admin/UpdateQuestion?id=${id}`, question)
  },
  deleteQuestion(id) {
    return api.delete(`/Admin/DeleteQuestion?id=${id}`)
  },
  getAnswers(params) {
    return api.post("/Admin/PagingAnswer", params)
  },
  getAnswerDetail(id) {
    return api.get(`/Admin/GetAnswerByID?id=${id}`)
  },
  updateAnswer(id, answer) {
    console.log(!answer.hasOwnProperty("AnswerID"));
    if(!answer.hasOwnProperty("AnswerID")){
      return api.post(`/Admin/AddAnswer`, answer)
    };
    return api.put(`/Admin/UpdateAnswer?id=${id}`, answer)
  },
  deleteAnswer(id) {
    return api.delete(`/Admin/DeleteAnswer?id=${id}`)
  },
  getCredits(params) {
    return api.post("/Admin/PagingCredit", params)
  },
  getCreditDetail(id) {
    return api.get(`/Admin/GetCreditByID?id=${id}`)
  },
  updateCredit(id, credit) {
    console.log(!credit.hasOwnProperty("Credit_id"));
    if(!credit.hasOwnProperty("Credit_id")){
      return api.post(`/Admin/AddCredit`, credit)
    };
    return api.put(`/Admin/UpdateCredit?id=${id}`, credit)
  },
  deleteCredit(id) {
    return api.delete(`/Admin/DeleteCredit?id=${id}`)
  },
  getRelated_films(params) {
    return api.post("/Admin/PagingRelated_film", params)
  },
  getRelated_filmDetail(id) {
    return api.get(`/Admin/GetRelated_filmByID?id=${id}`)
  },
  updateRelated_film(id, credit) {
    console.log(!credit.hasOwnProperty("Related_filmID"));
    if(!credit.hasOwnProperty("Related_filmID")){
      return api.post(`/Admin/AddRelated_film`, credit)
    };
    return api.put(`/Admin/UpdateRelated_film?id=${id}`, credit)
  },
  deleteRelated_film(id) {
    return api.delete(`/Admin/DeleteRelated_film?id=${id}`)
  },
  getSimilar_films(params) {
    return api.post("/Admin/PagingSimilar_film", params)
  },
  getSimilar_filmDetail(id) {
    return api.get(`/Admin/GetSimilar_filmByID?id=${id}`)
  },
  updateSimilar_film(id, credit) {
    console.log(!credit.hasOwnProperty("Similar_filmID"));
    if(!credit.hasOwnProperty("Similar_filmID")){
      return api.post(`/Admin/AddSimilar_film`, credit)
    };
    return api.put(`/Admin/UpdateSimilar_film?id=${id}`, credit)
  },
  deleteSimilar_film(id) {
    return api.delete(`/Admin/DeleteSimilar_film?id=${id}`)
  },
  getJournals(params) {
    return api.post("/Admin/PagingJournal", params)
  },
  getJournalDetail(id) {
    return api.get(`/Admin/GetJournalByID?id=${id}`)
  },
  updateJournal(id, journal) {
    console.log(!journal.hasOwnProperty("JournalID"));
    if(!journal.hasOwnProperty("JournalID")){
      return api.post(`/Admin/AddJournal`, journal)
    };
    return api.put(`/Admin/UpdateJournal?id=${id}`, journal)
  },
  deleteJournal(id) {
    return api.delete(`/Admin/DeleteJournal?id=${id}`)
  }
};
