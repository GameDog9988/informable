import {StyleSheet, Dimensions} from 'react-native';


export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: "#00B2A9",
  secondary: '#3C1D53',
  tertiary: '#CD2060'
}


export const fonts = {
  x12: 12,
  x16: 16,
  x24: 24,
  x32: 32,
  primary: 'Cochin'
}

export const buttons = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary,
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