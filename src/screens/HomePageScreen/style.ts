import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowImage: {
    tintColor: 'black',
  },
  searchTextView: {
    flex: 9,
    justifyContent: 'center',
  },
  searchText: {
    marginLeft: 12,
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },
  imageSearchView: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBoxView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 36,
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
    shadowColor: '#190134',
    shadowOpacity: 0.12,
    elevation: 5,
  },
  line: {
    height: 1,
    opacity: 0.5,
    marginTop: 5,
    backgroundColor: '#e4e4e4',
  },
});
