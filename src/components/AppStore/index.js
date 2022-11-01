import React from "react";

import TabItem from "../TabItem";

import AppItem from "../AppItem";

import "./index.css";

const tabsList = [
  { tabId: "SOCIAL", displayText: "Social" },
  { tabId: "GAMES", displayText: "Games" },
  { tabId: "NEWS", displayText: "News" },
  { tabId: "FOOD", displayText: "Food" },
];

const appsList = [
  {
    appId: 0,
    appName: "Facebook",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qmx_udSx1reawsGU_nwBnAHaHP?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 1,
    appName: "Messenger",
    imageUrl:
      "https://th.bing.com/th/id/OIP.1UibV9emrXwSW7No1yYuqAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 2,
    appName: "WhatsApp",
    imageUrl:
      "https://th.bing.com/th/id/OIP.GhuhlEUnrpjFC27ANv8pkgHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 3,
    appName: "Instagram",
    imageUrl:
      "https://th.bing.com/th/id/OIP.XgT9d552B6R9C60Ul2yqkAHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 4,
    appName: "Snapchat",
    imageUrl:
      "https://th.bing.com/th/id/OIP.-DH8OHashCkaje9sKaS7dgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 5,
    appName: "Twitter",
    imageUrl:
      "https://th.bing.com/th/id/OIP.PSj_SQum7CH01WhmY2kFcAHaHx?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 6,
    appName: "Pinterest",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Fa2MCSbq8exWRGGgHAedvwHaHa?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 7,
    appName: "WeChat",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Mq2g1KAK1njf1Xj27oue0QHaHX?w=206&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 8,
    appName: "LinkedIn",
    imageUrl:
      "https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 9,
    appName: "Telegram",
    imageUrl:
      "https://th.bing.com/th/id/OIP.7UFR8a1i-vjEwZnkSXJ-4wHaEo?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "SOCIAL",
  },
  {
    appId: 10,
    appName: "Subway Surfers",
    imageUrl:
      "https://th.bing.com/th/id/OIP.dcdTKK143aTSJj0nxxIj8gHaHa?w=192&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 11,
    appName: "Crossy Road",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Nf-2aIhjfhbQDtb7KggSrAHaHB?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 12,
    appName: "Super Chef",
    imageUrl:
      "https://th.bing.com/th/id/OIP.McQ01EWILkNa8-p2kr8kVwHaHp?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 13,
    appName: "Angry Birds",
    imageUrl:
      "https://i.pinimg.com/originals/bb/3e/ee/bb3eee193fe739f01228374f5a20f71e.jpg",
    category: "GAMES",
  },
  {
    appId: 14,
    appName: "Hill Climb 2",
    imageUrl:
      "https://www.bing.com/th?id=OIP.EydLrTAKJo5v-t_HCfEqYwHaEL&w=332&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category: "GAMES",
  },
  {
    appId: 15,
    appName: "Temple Run",
    imageUrl:
      "https://www.bing.com/th?id=OIP.2xcD5l70l6fXK_3C3SohmAHaD6&w=343&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category: "GAMES",
  },
  {
    appId: 16,
    appName: "Dr. Driving",
    imageUrl:
      "https://th.bing.com/th/id/OIP.6YOpLNiPSy6ZZskedzMYZQHaEL?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 17,
    appName: "Smurfs Bubble",
    imageUrl:
      "https://th.bing.com/th/id/OIP.y35cuKWX2uS6RlqCaX1lfwHaH7?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 18,
    appName: "Grade Learning",
    imageUrl:
      "https://th.bing.com/th/id/OIP.kIB9-osXcIihD_BNL1oyyAAAAA?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 19,
    appName: "My Talking Tom",
    imageUrl:
      "https://th.bing.com/th/id/OIP.swY1Tk-grdMf9VOnItmIwQHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "GAMES",
  },
  {
    appId: 20,
    appName: "Inshorts",
    imageUrl:
      "https://th.bing.com/th/id/OIP.jP2tLqtTxXAWa3kOIQv7aQAAAA?w=153&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 21,
    appName: "Way2News",
    imageUrl:
      "https://th.bing.com/th/id/OIP.8bSfnzJxTkvEdKGoXoLLOQAAAA?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 22,
    appName: "Google News",
    imageUrl:
      "https://th.bing.com/th/id/OIP.uefz1pR4ekIir3PmhVuc1gHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 23,
    appName: "Flipboard",
    imageUrl:
      "https://th.bing.com/th/id/OIP.jFz0cI4OCHgEax_-wN5p3QHaJU?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 24,
    appName: "SmartNews",
    imageUrl:
      "https://th.bing.com/th/id/OIP.b2ZoIJ9DSKc2DaAoeqaPkwHaD4?w=324&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 25,
    appName: "BBC News",
    imageUrl:
      "https://th.bing.com/th/id/OIP.d0ixIMkd4epkfSzyi-iihAHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 26,
    appName: "CNN News",
    imageUrl:
      "https://th.bing.com/th/id/OIP.KHVAay9kz9uBUZf5EJwXygHaFj?w=200&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 27,
    appName: "Daily Wire",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4KV8GbZY82VhaaPA2LBSGwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 28,
    appName: "AP News",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ZaRU5xzFCfV00m9zclPhcgAAAA?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 29,
    appName: "News Break",
    imageUrl:
      "https://th.bing.com/th/id/OIP.BbT7Wb53RdSnb-P9-UPAKgHaBi?w=333&h=72&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "NEWS",
  },
  {
    appId: 30,
    appName: "Zomato",
    imageUrl:
      "https://th.bing.com/th/id/OIP.2Xsi8PxJNKjWIRVhZM233wHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "FOOD",
  },
  {
    appId: 31,
    appName: "Swiggy",
    imageUrl:
      "https://www.fishsensedq.com/wp-content/uploads/2021/01/swiggy-logo-design-1-02.png",
    category: "FOOD",
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      "https://th.bing.com/th/id/OIP.i8zVnP5IcJkvxVh3I8bwbQHaHc?w=195&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "FOOD",
  },
  {
    appId: 33,
    appName: "All in One",
    imageUrl:
      "https://th.bing.com/th/id/OIP.oOC2lW3ISiUMgWjmIwgfEAHaFL?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "FOOD",
  },
  {
    appId: 34,
    appName: "Instacart",
    imageUrl:
      "https://th.bing.com/th/id/R.a94e1de13ba8b0e10f4d6e13a414632e?rik=RIBU3y98OCTJ%2fw&riu=http%3a%2f%2fwww.theshelbyreport.com%2fwp-content%2fuploads%2f2017%2f05%2fInstacart-logo-1-765x510.jpg&ehk=iu5KSta84VX1GKaxu4AMfSwbmCdxcbi5qZ6cpNJcplo%3d&risl=&pid=ImgRaw&r=0",
    category: "FOOD",
  },
  {
    appId: 35,
    appName: "Saucey",
    imageUrl:
      "https://th.bing.com/th/id/OIP.zlsnC_NSQTm6AA_GLFc5ZwHaHa?w=152&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "FOOD",
  },
  {
    appId: 36,
    appName: "Waitr",
    imageUrl:
      "https://clipground.com/images/waitr-logo-png-3.png",
    category: "FOOD",
  },
  {
    appId: 37,
    appName: "Grubhub",
    imageUrl:
      "https://www.bing.com/th?id=OIP.BU73u3_BRW4BMekcpY9MbAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category: "FOOD",
  },
  {
    appId: 38,
    appName: "Mercato",
    imageUrl:
      "https://www.bing.com/th?id=OIP.7_UdlUFIsv1NCIjD1H8peAHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category: "FOOD",
  },
  {
    appId: 39,
    appName: "Dot",
    imageUrl: "https://www.bing.com/th?id=OIP.UxjlzceQw-Zm2uQOR5xeOwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category: "FOOD",
  },
];

class AppStore extends React.Component {
  state = {
    searchInput: "",
    activeTabId: tabsList[0].tabId,
  };

  updateTab = (tabId) => {
    this.setState({ activeTabId: tabId });
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  getFilteredApps = (searchedApps) => {
    const { activeTabId } = this.state;
    const filteredResults = searchedApps.filter(
      (eachApp) => eachApp.category === activeTabId
    );
    return filteredResults;
  };

  getSearchResults = () => {
    const { searchInput } = this.state;
    const searchResults = appsList.filter((eachApp) =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchResults;
  }

  render() {
    const { searchInput, activeTabId } = this.state;
    const searchResults = this.getSearchResults();
    const filteredApps = this.getFilteredApps(searchResults);

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading"> App Store </h1>
          <div className="search-input-container">
            <input
              type="search"
              className="input"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="alignment">
            {tabsList.map((eachTab) => (
              <TabItem
                tabDetails={eachTab}
                key={eachTab.tabId}
                updateTab={this.updateTab}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="aligning">
            {filteredApps.map((eachApp) => (
              <AppItem appDetails={eachApp} key={eachApp.appId} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AppStore;