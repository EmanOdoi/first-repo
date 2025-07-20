import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView 
      style={{ 
        flex: 1, 
        backgroundColor: '#f8f9fa' // Light gray background
      }}
    >
      <AppNav />
    </GestureHandlerRootView>
  );
}