// @flow
import * as React from 'react';
import {
  PlaceHolder,
  AvatarLoading,
  AvatarRoundLoading,
  DividerLoading,
  NameCardLoading,
  DateCardLoading,
  ContentLoading
} from './style'

class CardLoading extends React.Component < {} > {
  render() {
    return (<PlaceHolder>
      <AvatarLoading/>
      <AvatarRoundLoading/>
      <DividerLoading height={8} top={0} left={40}/>
      <NameCardLoading/>
      <DividerLoading height={12} top={14} left={40}/>

      <DateCardLoading/>
      <DividerLoading height={16} top={32} left={40}/>

      <DividerLoading height={20} top={40} left={0}/>

    <ContentLoading height={6} top={60} left={178}/>
      <DividerLoading height={13} top={66} left={0}/>

    <ContentLoading height={6} top={79} left={340}/>

      <DividerLoading height={13} top={85} left={0}/>

    <ContentLoading height={6} top={98} left={440}/>
      <DividerLoading height={13} top={105} left={0}/>

      <ContentLoading height={6} top={118} left={264}/>
      <DividerLoading height={13} top={124} left={0}/>

      <ContentLoading height={6} top={137} left={378}/>
      <DividerLoading height={13} top={143} left={0}/>

      <ContentLoading height={6} top={156} left={87}/>
      <DividerLoading height={13} top={162} left={0}/>

      <ContentLoading height={6} top={175} left={150}/>
      <DividerLoading height={13} top={181} left={0}/>

      <ContentLoading height={6} top={194} left={420}/>
      <DividerLoading height={13} top={200} left={0}/>

    <ContentLoading height={6} top={213} left={267}/>



    </PlaceHolder>)
  }
}

export default CardLoading
