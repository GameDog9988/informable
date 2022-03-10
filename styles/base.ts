import {StyleSheet, Dimensions} from 'react-native';


export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: {
   purple: "#3C1053",
   teal: "#00B2A9",
  },
  secondary: {
   teal: "#3C1D53",
   seaBlue: "#007681",
   slateBlue: "#004F71",
   purple: "#403A60",
   coolGray: "#53585A"
  },
  tertiary: "#CD2060"
}


export const fonts = {
  x12: 12,
  x16: 16,
  x24: 24,
  x32: 32,
  primary: 'Roboto'
}

export const buttons = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary.teal,
    width: "100%",
    maxWidth: 308,
    padding: 8,
  },
  primaryButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  whiteButton: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
  },
  whiteButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  outlineButton: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderWidth: 1,
    borderColor: "#004F71",
    borderStyle: "solid",
    fontSize: 16,
  },
  outlineButtonText: {
    textAlign: "center",
    color: "#004F71",
    fontSize: 16,
  },
})