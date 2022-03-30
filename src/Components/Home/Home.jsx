import {
  faDroplet,
  faMagnifyingGlass,
  faTemperatureArrowDown,
  faTemperatureArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import {
  ContainerAllInfos,
  ContainerHome,
  ContainerTempAndState,
  OtherInfosStyle,
  StyleButton,
  StyleDivInfos,
  StyleImg,
  StyleInput,
  TemperaturesInfosStyle
} from "./Home.Style";

const Home = () => {
  const [citySelected, setCitySelected] = useState();
  const [citySelectedWeather, setcitySelectedWeather] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState();

  moment.updateLocale("pt-br", {
    weekdays: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ],
  });

  const handleCitySelect = (e) => {
    e.preventDefault();
    setCitySelected(e.target.value);
  };

  const handleSearchCityWeather = async () => {
    if (citySelected) {
      try {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${citySelected},BR&appid=d5566def5fb3ff276ec9833d8560a0be&lang=pt_br&units=metric`
        );
        setcitySelectedWeather(response.data);
        let responseIcon = await axios.get(
          `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
        setWeatherIcon(responseIcon.config.url);
      } catch (error) {
        const ErrorStatus = error.response.status;
        if (ErrorStatus >= 400) {
          alert("[ERRO] - Verifique sua resposta e tente novamente.");
        } else if (ErrorStatus >= 500) {
          alert("[ERRO] - Tente novamente mais tarde.");
        }
      }
    } else {
      alert("Digite seu estado");
    }
  };

  return (
    <ContainerHome>
      <ContainerAllInfos>
        <h1>CliMap</h1>
        <ContainerTempAndState>
          {citySelectedWeather.length !== 0 && (
            <StyleDivInfos>
              <h4>{citySelectedWeather.name}</h4>
              <h1>{citySelectedWeather.main.temp.toFixed(1)}ºC</h1>
              <h4>{citySelectedWeather.weather[0].description}</h4>
              <StyleImg src={weatherIcon} alt="icone-do-tempo" />
            </StyleDivInfos>
          )}

          <StyleInput
            placeholder="Digite seu estado ou cidade.."
            type="text"
            name=""
            id=""
            onChange={handleCitySelect}
          ></StyleInput>
          <StyleButton onClick={handleSearchCityWeather}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </StyleButton>
        </ContainerTempAndState>
        {citySelectedWeather.length !== 0 && (
          <OtherInfosStyle>
            <span>{moment().format("dddd")}</span>
            <TemperaturesInfosStyle>
              <div>
                <FontAwesomeIcon icon={faDroplet} />
                <span> {citySelectedWeather.main.humidity}%</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faTemperatureArrowUp} />
                <span> {citySelectedWeather.main.temp_max.toFixed(1)}ºC</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faTemperatureArrowDown} />
                <span> {citySelectedWeather.main.temp_min.toFixed(1)}ºC</span>
              </div>
            </TemperaturesInfosStyle>
          </OtherInfosStyle>
        )}
      </ContainerAllInfos>
      <h4>
        Feito Por:{" "}
        <a target={"blank"} href="https://github.com/LucassPimentel">
          Lucas Pimentel
        </a>{" "}
        &copy; 2022
      </h4>
      <p>OBS: Algumas informações não são 100% precisas.</p>
    </ContainerHome>
  );
};
export default Home;
