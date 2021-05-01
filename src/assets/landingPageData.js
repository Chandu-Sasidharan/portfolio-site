import axios from "axios";
import { useEffect, useState } from "react";

function ApodData() {
	const [img_obj, setState] = useState([null]);

	useEffect(() => {
		async function ApodObject() {
			const apodobject = await axios(
				`http://localhost:8000/apod`
				// `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}`
			);
			let img_obj = apodobject.data.valueOf()[0];
			let date = img_obj["date"].split("-");
			// let date = img_obj["date"].split("-");
			let month = null;
			switch (date[1]) {
				case "01":
					month = "January";
					break;
				case "02":
					month = "February";
					break;
				case "03":
					month = "March";
					break;
				case "04":
					month = "April";
					break;
				case "05":
					month = "May";
					break;
				case "06":
					month = "June";
					break;
				case "07":
					month = "July";
					break;
				case "08":
					month = "August";
					break;
				case "09":
					month = "September";
					break;
				case "10":
					month = "October";
					break;
				case "11":
					month = "November";
					break;
				case "12":
					month = "December";
					break;
				default:
					month = null;
					break;
			}
			let formatted_date = month;
			formatted_date = formatted_date.concat(" ", date[2], ", ", date[0]);
			img_obj = { ...img_obj, formatted_date: formatted_date };
			setState(img_obj);
		}
		ApodObject();
	}, []);

	return img_obj;
}

export default ApodData;
