import React, { Component } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
          countries: [],
          selectedCountry: {
            "name_kor": "한국",
            "value": "🇰🇷"
          },
          selectedCountries: [],
          onlyFlagText: ""
        };
        this.addCountry = this.addCountry.bind(this);
    }
    
    componentDidMount(){
      this.setState({
        countries: [
        {
          "name_kor": "한국",
          "value": "🇰🇷"
        },
        {
          "name_kor": "일본",
          "value": "🇯🇵"
        },
        {
          "name_kor": "홍콩",
          "value": "🇭🇰"
        },
        {
          "name_kor": "태국",
          "value": "🇹🇭"
        },
        {
          "name_kor": "호주",
          "value": "🇦🇺"
        },
        {
          "name_kor": "스위스",
          "value": "🇨🇭"
        },
        {
          "name_kor": "중국",
          "value": "🇨🇳"
        },
        {
          "name_kor": "독일",
          "value": "🇩🇪"
        },
        {
          "name_kor": "스페인",
          "value": "🇪🇸"
        },
        {
          "name_kor": "프랑스",
          "value": "🇫🇷"
        },
        {
          "name_kor": "영국",
          "value": "🇬🇧"
        },
        {
          "name_kor": "미국",
          "value": "🇺🇸"
        },
        {
          "name_kor": "캐나다",
          "value": "🇨🇦"
        },
        {
          "name_kor": "이탈리아",
          "value": "🇮🇹"
        },
        {
          "name_kor": "필리핀",
          "value": "🇵🇭"
        },
        {
          "name_kor": "싱가포르",
          "value": "🇸🇬"
        },
        {
          "name_kor": "대만",
          "value": "🇹🇼"
        },
        {
          "name_kor": "베트남",
          "value": "🇻🇳"
        }
        
        ]
      });
    }

    addCountry(event){
      const {countries, selectedCountries } = this.state;
      var cObj = countries.find(country => country.name_kor == event.target.value);

      //[MEMO]: test redundant
      if(selectedCountries.includes(cObj)){
        alert("이미 추가된 국가입니다");
        return;
      }
      this.setState({
        selectedCountries: [...this.state.selectedCountries, cObj], 
        onlyFlagText: this.state.onlyFlagText + cObj.value
      });
    }
    render() {
        const age = 0;

        return (
            <div>
                <p>{this.state.onlyFlagText}</p>
                <FormControl>
                  <InputLabel id="input-country">국가</InputLabel>
                  <Select
                    labelId="input-country"
                    id="select-country"
                    value={this.state.selectedCountry.name_kor}
                    onChange={this.addCountry}
                  >
                    {this.state.countries.map((x, i) => {
                    return <MenuItem value={x.name_kor} key={i}>{x.name_kor} {x.value}</MenuItem>
                    })}
                  </Select>
                </FormControl>
            </div>
        );
    }
}

export default App;