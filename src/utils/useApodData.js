import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useApodData() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getApodData = async () => {
      try {
        const response = await axios(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}`
        );
        let apodData = response.data;

        let dateParts = apodData['date'].split('-');
        let month;
        switch (dateParts[1]) {
          case '01':
            month = 'January';
            break;
          case '02':
            month = 'February';
            break;
          case '03':
            month = 'March';
            break;
          case '04':
            month = 'April';
            break;
          case '05':
            month = 'May';
            break;
          case '06':
            month = 'June';
            break;
          case '07':
            month = 'July';
            break;
          case '08':
            month = 'August';
            break;
          case '09':
            month = 'September';
            break;
          case '10':
            month = 'October';
            break;
          case '11':
            month = 'November';
            break;
          case '12':
            month = 'December';
            break;
          default:
            month = null;
            break;
        }
        let formatted_date = month.concat(' ', dateParts[2], ', ', dateParts[0]);
        apodData = { ...apodData, formatted_date };

        setData(apodData);
      } catch (error) {
        console.log("Error Fecthing Data", error);
      }
    };
    getApodData();
  }, []);

  return data;
}
