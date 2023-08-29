import axios from "axios";
export const servDelete = async (url) => {
    var message;

    await axios.delete(url)
        .then((response) => {
            message = response.data.message;
        }).catch((err) => {
            if (err.response) {
                message(err.response.data.message)
              } else {
                message("Error: Please try again later or contact...!");
              }
        });

    return message;
}