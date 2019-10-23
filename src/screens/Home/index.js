/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  View, FlatList, Text, TouchableOpacity,
} from 'react-native';
import { Title, Subtitle, Card } from '../../components';
import { Container } from './styles';
import { api } from '../../services';

function Home() {
  const [tasks, setTasks] = useState({});
  const [isLoading, setLoading] = useState(true);

  const handleGetTasks = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/');
      setTasks(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleGetTasks();
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View>
        <Card>
          <Title>{item.name}</Title>
          <Subtitle>{item.description}</Subtitle>
          <Text>{item.made === 1 ? 'feito' : 'Não feito' }</Text>
        </Card>
      </View>
    </TouchableOpacity>

  );
  return (
    <Container>
      {// console.log(tasks)
      }
      <Title>Suas Tarefas</Title>
      { !isLoading && (
      <FlatList
        keyExtractor={(item) => item}
        renderItem={renderItem}
        data={tasks.return.rows}
      />
      )}

    </Container>
  );
}
export default Home;
