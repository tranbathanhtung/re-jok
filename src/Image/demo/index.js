// @flow
import * as React from 'react';
import Image from '../Image';
import Row from '../../Grid/Row';
import Col from '../../Grid/Col';


class ImageDemo extends React.Component<{}>{



  render(){
  ;
    return (
      <React.Fragment>
        <Row>
          <Col span={6}>
              <Image width={160} height={160} shape="rounded" src="https://www.10wallpaper.com/wallpaper/1366x768/1609/Assassins_creed_the_ezio_collection-2016_Game_Posters_HD_Wallpaper_1366x768.jpg"/>
          </Col>
          <Col span={6}>
            <Image width="160" height="160" shape="circle" src="https://www.10wallpaper.com/wallpaper/1366x768/1609/Assassins_creed_the_ezio_collection-2016_Game_Posters_HD_Wallpaper_1366x768.jpg"/>

          </Col>
          <Col span={6}>
              <Image width={160} height={160} hasBoxshadow shape="rounded" src="https://www.10wallpaper.com/wallpaper/1366x768/1609/Assassins_creed_the_ezio_collection-2016_Game_Posters_HD_Wallpaper_1366x768.jpg"/>
          </Col>
          <Col span={6}>
            <Image width={160} height={160} hasBoxshadow shape="circle" src="https://www.10wallpaper.com/wallpaper/1366x768/1609/Assassins_creed_the_ezio_collection-2016_Game_Posters_HD_Wallpaper_1366x768.jpg"/>

          </Col>
        </Row>
      </React.Fragment>

    )
  }
}

export default ImageDemo
