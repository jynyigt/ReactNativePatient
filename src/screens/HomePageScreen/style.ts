import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#f5f7f9',
  },
  body: {
    marginTop: 80,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  placeholderStyle: {
    color: '#d6d6d6',
    fontSize: 14,
    marginLeft: 12,
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
  image: {
    width: 15,
    height: 15,
  },
  flatListView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  flatListBody: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageFlatList: {
    width: 50,
    height: 50,
  },
  leftView: {
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    opacity: 0.5,
    marginTop: 5,
    backgroundColor: '#e4e4e4',
  },
  buttonHeight: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonActiveOpacity: {
    opacity: 1,
  },
  buttonOpacity: {
    opacity: 0.32,
  },
  buttonView: {
    backgroundColor: '#ffae1a',
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
  },
  totalView: {
    marginTop: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  notFoundView: {
    width: 50,
    height: 50,
  },
  notFoundText: {
    marginTop: 14,
    marginLeft: 6,
    fontSize: 18,
  },
});
