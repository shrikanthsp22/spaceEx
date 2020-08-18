import React from "react";
import CardComponent from "../Pages/CardComponent";
import { ParentWrapper, FilterContainer, CardContainer, FilterBlock, Buttton, LoaderComponent, SubHeaders, Filter, Footer, Notification } from "../main.styles";
import Loader from 'react-loader-spinner'
import { TEXT_CONSTANTS } from '../constants';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      allData: [],
      yearsList: [],
      filteredData: [],
      launchYear: '',
      launchSuccess: '',
      landSuccess: '',
      cardLoading: false,
    }
  }

  componentDidMount() {
    const yearsArr = []
    for (let i = 2006; i <= 2020; i++) {
      yearsArr.push(i)
    }
    //make api call here and put it to the state
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then(res => res.json()).then((result) => {
        this.setState({
          loading: false,
          allData: result,
          yearsList: yearsArr,
        })
      })
  }

  handleFormString = (year, launch, land) => {
    const { history = {} } = this.props;
    let apiString = 'https://api.spaceXdata.com/v3/launches?limit=100'
    if (year.toString()) {
      apiString = apiString + `&launch_year=${year}`;
    }
    if (launch.toString()) {
      apiString = apiString + `&launch_success=${launch}`;
    }
    if (land.toString()) {
      apiString = apiString + `&land_success=${land}`;
    }
    // history.push(`filter`);
    this.setState({ cardLoading: true })
    fetch(`${apiString}`).then(res => res.json()).then(result => this.setState({ allData: result, cardLoading: false }))
  }

  handleYearClick = (i) => {

    if (this.state.launchYear === i) {
      this.setState({ launchYear: '' }, () => this.handleFormString(this.state.launchYear, this.state.launchSuccess, this.state.landSuccess))
    } else {

      this.setState({ launchYear: i }, () => this.handleFormString(this.state.launchYear, this.state.launchSuccess, this.state.landSuccess))
    }
  }

  handleSuccessfullLandClick = (param, launchOrLand) => {
    let checkerParam = '';


    if (launchOrLand == 'launchSuccess') {
      checkerParam = this.state.launchSuccess
    } else if (launchOrLand == 'landSuccess') {
      checkerParam = this.state.landSuccess
    }
    console.log("checkerParam", checkerParam);
    if ((checkerParam !== true && checkerParam !== false) || (checkerParam === (!param))) {

      this.setState({
        [launchOrLand]: param
      }, () => this.handleFormString(this.state.launchYear, this.state.launchSuccess, this.state.landSuccess))

    } else if (checkerParam == param) {
      this.setState({
        [launchOrLand]: ''
      }, () => this.handleFormString(this.state.launchYear, this.state.launchSuccess, this.state.landSuccess))
    }

  }

  render() {
    console.log("props", this.props);
    const { changeUrl } = this.props;
    if (this.state.
      loading) {
      return (
        <LoaderComponent>
          <Loader type="TailSpin" color="black" height={80} width={80} />
        </LoaderComponent>
      )
    }

    return (
      <ParentWrapper>
        <FilterContainer>
          <Filter>Filters</Filter>
          <SubHeaders> {
            TEXT_CONSTANTS.LAUNCH_YEAR
          }</SubHeaders>
          <FilterBlock>
            {
              this.state.yearsList.map((i) => <Buttton style={{ backgroundColor: i === this.state.launchYear ? '#5e8d3c' : '#aed393' }} onClick={() => this.handleYearClick(i, changeUrl)}>{i}</Buttton>)
            }

          </FilterBlock>
          <SubHeaders>
            Successful Launch
          </SubHeaders>

          <FilterBlock>
            <Buttton style={{ backgroundColor: true === this.state.launchSuccess ? '#5e8d3c' : '#aed393' }} onClick={() => this.handleSuccessfullLandClick(true, 'launchSuccess')}>
              True
            </Buttton >
            <Buttton style={{ backgroundColor: false === this.state.launchSuccess ? '#5e8d3c' : '#aed393' }} onClick={() => this.handleSuccessfullLandClick(false, 'launchSuccess')}>
              False
            </Buttton>
          </FilterBlock>
          <SubHeaders>
            Successful Landing
          </SubHeaders>

          <FilterBlock>
            <Buttton style={{ backgroundColor: true === this.state.landSuccess ? '#5e8d3c' : '#aed393' }} onClick={() => this.handleSuccessfullLandClick(true, 'landSuccess')}>
              True
            </Buttton>
            <Buttton style={{ backgroundColor: false === this.state.landSuccess ? '#5e8d3c' : '#aed393' }} onClick={() => this.handleSuccessfullLandClick(false, 'landSuccess')}>
              False
            </Buttton>
          </FilterBlock>

        </FilterContainer>
        {
          this.state.cardLoading ? <LoaderComponent>
            <Loader type="TailSpin" color="black" height={80} width={80} />
          </LoaderComponent> :
            <CardContainer>
              {
                this.state.allData && this.state.allData.map((item) => <CardComponent data={item} />)

              }
              {
                this.state.allData.length < 1 && <Notification>No results Found for the applied filters!</Notification>
              }
              <Footer>
                <div>
                  <b>
                    Developed by: Shrikanth P S
                  </b>
                </div>
              </Footer>
            </CardContainer>
        }
      </ParentWrapper >
    );
  }
}
export default withRouter(HomePage);





