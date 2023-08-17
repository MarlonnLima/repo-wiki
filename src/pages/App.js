import github from '../assets/github_logo.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';


import { Container } from './styles'
import Button from '../components/Button';
import { api } from '../services/api';

export default function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, SetCurrentRepo] = useState('')


  const handleSearchRepo = async () => {
    if (!currentRepo) {
      alert('Antes de procurar digite o repositório nesse formato seunome/repositorio')
      return
    }

    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id == data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data])
        SetCurrentRepo("");
        return
      } else {
        alert("Repositório já adicionado!")
        return
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter((repo) => repo.id !== id);

    setRepos(updatedRepos)
  }
  return (
    <Container>
      <img src={github} width={72} height={72} alt="Logo GitHub" />
      <Input value={currentRepo} onChange={(event) => { SetCurrentRepo(event.target.value) }} />
      <Button onClick={handleSearchRepo} titulo="Buscar Repositório" />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}
