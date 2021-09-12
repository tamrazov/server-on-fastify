import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import isEmpty from 'lodash.isempty';
const tasks = [
{
  id: "1",
  name: "ALEXANDR22",
  priority: '1',
  status: '1',
  time_start: "2021-07-22T19:18:43.929Z",
  time_end: "2021-07-22T22:39:43.929Z",
  fact_time_start: "2021-07-22T19:18:43.929Z",
  fact_time_end: "2021-07-22T22:39:43.929Z"
},
{
  id: "2",
  name: "f",
  priority: '1',
  status: '1',
  time_start: "2021-07-22T19:18:43.929Z",
  time_end: "2021-07-22T19:59:13.929Z",
  fact_time_start: "2021-07-22T19:18:43.929Z",
  fact_time_end: "2021-07-22T19:59:13.929Z"
},
{
  id: "3",
  name: "asd",
  priority: '1',
  status: '1',
  time_start: "2021-07-22T19:18:43.929Z",
  time_end: "2021-07-22T20:20:43.929Z",
  fact_time_start: "2021-07-22T19:18:43.929Z",
  fact_time_end: "2021-07-22T20:18:43.929Z"
},
{
  id: "4",
  name: "qwe",
  priority: '1',
  status: '1',
  time_start: "2021-07-22T19:18:43.929Z",
  time_end: "2021-07-22T23:20:13.929Z",
  fact_time_start: "2021-07-22T19:18:43.929Z",
  fact_time_end: "2021-07-22T23:20:13.929Z"
},
];
const users = [
  {
    id: "1",
    name: "Alex",
    email: "box-1@gmail.com",
    fullname: "Alex Aleksandrov_1",
    password: '123456',
    secretQuestion: "How old are you?",
    secretAnswer: "1"
  },
];
const TOKEN = 'asdpasdasmdqjdmcnjscklzcmzkdoasdal';

const server: FastifyInstance = Fastify({})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (request, reply) => {
  return { pong: 'it worked!!!!!!!!!!!!!' }
})

server.get('/tasks', async (request, reply) => {
  const {name}: any = request.query;
  const newTasks = tasks.filter((task) => task.name.match(name));

  return {tasks: newTasks}
})

server.post('/tasks', async (request, reply) => {
  let attrs: any = request.body;
  let errors: {[key: string]: string} = {};
  for (let key of [
    'name',
    'status',
    'priority',
    'time_start',
    'time_end',
  ]) {
    if(!attrs[key]) {
      errors[key] = `${key} is required`
    }
  }
  if (!isEmpty(errors)) return {errors};
  const task = {id: tasks.length + 1, ...attrs}
  const newTasks = tasks.push(task);

  return {tasks: newTasks};
})

server.put('/tasks/:id', async (request, reply) => {
  let {id}: any = request.params;
  let attrs: any = request.body;
  let errors: {[key: string]: string} = {};
  for (let key of [
    'name',
    'status',
    'priority',
    'time_start',
    'time_end',
  ]) {
    if(!attrs[key]) {
      errors[key] = `${key} is required`
    }
  }
  if (!isEmpty(errors)) return {errors};
  let newTask = {...attrs};
  tasks.splice(id - 1, 1, newTask)
  return {tasks: tasks};
})

server.delete('/tasks/:id', async (request, reply) => {
  let {id}: any = request.params;
  const newTasks = tasks.filter((task) => task.id !== id);
  return {list: newTasks};
})

server.get('/users', async (request, reply) => {
  return users;
})

server.get('/profile/:id', async (request, reply) => {
  let {id}: any = request.params;
  let user = users.find(id);
  return user;
})

server.put('/profile/:id', async (request, reply) => {
  let {id}: any = request.params;
  let attrs: any = request.body;
  let errors: {[key: string]: string} = {};
  for (let key of [
    'name',
    'email',
    'fullname',
    'password',
    'secretQuestion',
    'secretAnswer'
  ]) {
    if(!attrs[key]) {
      errors[key] = `${key} is required`
    }
  }
  if (!isEmpty(errors)) return {errors};
  let newProfile = {...attrs};
  users.splice(id - 1, 1, newProfile);
  const currentUser = users.find((user) => user.id == id);
  return {currentUser};
})

server.post('/login', async (request, reply) => {
  let {email, password}: any = request.body
  if (!email || !password) {
    return {error: 'require email and password'};
  }
  const currentUser = users.find((item) => item.email === email);
  if (currentUser === null) {
    return {error: 'email not found'};
  }

  if (currentUser && currentUser.password !== password) {
    return {error: 'password incorrect'};
  }

  return {id: currentUser?.id, token: TOKEN};
})

server.post('/register', async (request, reply) => {
  let attrs: any = request.body;
  let errors: {[key: string]: string} = {};
  for (let key of ['name','email','password','secretQuestion','secretAnswer']) {
    if(!attrs[key]) {
      errors[key] = `${key} is required`
    }
  }
  if (!isEmpty(errors)) return {errors};

  if (!attrs['email']) {
    return {errors: {email: 'incorrect email'}}
  }

  let id = (tasks.length + 1).toString();
  let newProfile = {id, ...attrs};
  users.push(newProfile);
  return {id: newProfile.id, token: TOKEN};
})

server.post('/register', async (request, reply) => {
  let email = request.body;
  let user = users.find(item => item.email === email);
  if (user === null) {
    return {error: 'email not found'};
  }

  return {id: user?.id, secretQuestion: user?.secretQuestion, secretAnswer: user?.secretAnswer};
})

const start = async () => {
  try {
    await server.listen(3000)

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
