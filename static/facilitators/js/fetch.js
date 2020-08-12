
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');



const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(response => {
    if (response.status >= 400) {
      // !response.ok
      return response.json().then(errResData => {
        const error = new Error('Something went wrong!');
        error.data = errResData;
        throw error;
      });
    }
    return response.json();
  });
};

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
};

var data={
    "first_name": "The Grey",
    "last_name": "man",
    "email":"ramvijay@gmail.com",
    "password1":"jaibalaji@#97",
    "password2":"jaibalaji@#97",

    "facilitator": {"Linkedin_Url": "https://www.linkedin.com/in/vijay-gwala-a88522190/", "Website_Url": "https://www.linkedin.com/in/vijay-gwala-a88522190/", "Youtube_Url":  "https://www.linkedin.com/in/vijay-gwala-a88522190/","RExperience":"A","TExperience":"B"},
    "fquery":{"query":"NO Doubt" }
   
       
}

const sendData = () => {
  sendHttpRequest('POST', '{% url 'register' %}',data)
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err, err.data);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);