import http from "../http-common";

class LoanAppService {

    requestHdr = {
        method: "GET",
        headers: { 'Content-Type': 'application/json', 'sessionId': '123' }
    };

    getAll(page = 0) {
        return http.get(`restaurants?page=${page}`);
    }

    get(id) {
        console.log("within get(id)::" + id);
        // return fetch(`http://localhost:5000/api/v1/restaurants/id/${id}`, this.requestHdr);
        // return fetch(`http://localhost:5000/api/v1/restaurants/id/${id}`)
        //     .then((response) => response.json())
        //     .then((data) => console.log("within fetch::", data));
        return http.get(`/restaurants/id/${id}`);
    }

    find(query) {
        return http.get(`status/${query}`);
    }

    applyLoan(data) {
        return http.post("/apply", data);
    }

    updateReview(data) {
        return http.put("/restaurants/review", data);
    }

    deleteReview(id, userId) {
        return http.delete(`/restaurants/review?id=${id}`, { data: { user_id: userId } });
    }

    getCuisines(id) {
        return http.get(`/restaurants/cuisines`);
    }

}

export default new LoanAppService();