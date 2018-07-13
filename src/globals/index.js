import styled from 'styled-components'

export const hexa = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);


  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const shadeColor = (color, percent) => {
  if(color.charAt(0) !== "#") return color;
  var R = parseInt(color.slice(1, 3), 16),
    G = parseInt(color.slice(3, 5), 16),
    B = parseInt(color.slice(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100, 10);
    G = parseInt(G * (100 + percent) / 100, 10);
    B = parseInt(B * (100 + percent) / 100, 10);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}



export const PrimaryText = styled.span `
  color: ${({theme}) => theme.text.primary};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
`

export const SecondaryText = styled.span `
  color:${({theme}) => theme.text.secondary};
  font-size: 1.2rem;
  font-weight: 200;
  line-height: 2.5rem;

`
