import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

    // SHORTHAND SYNTAX

    handleDeleteOptions = () => {
      this.setState(() => ({ options: []}))
    }

    handleClearSelectedOption = () => {
      this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          //.filter(option)Tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.
          // W tym przypadku sprawdza czy pojedynczy element tablicy prevState.options jest równy parametrowy podanemu jako optionToRemove
          return optionToRemove !== option;
        })
      }))
    }

    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({ selectedOption: option }))
    }

    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      } else {

        // SHORHAND SYNTAX
        this.setState((prevState) => ({
          options: prevState.options.concat([option])
        }));
      }
    }
    //REACT LIFECYCLES

    componentDidMount(prevProps, prevState) {
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => ({ options }))
        }
      } catch (error) {
        // do nothing
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state.options) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json)
      }
    }

    render () {
      const subtitle = 'Put your life in the hands of computer';
      return (
        <div>
          <Header subtitle={subtitle}/>
          <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
          />
          <Options
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
          />
          <AddOptions
          handleAddOption = {this.handleAddOption}
          />
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption = {this.handleClearSelectedOption}
          />
        </div>
      )
    }
  }

  IndecisionApp.defaultProps = {
    options: []
  }


