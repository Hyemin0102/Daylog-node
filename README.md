# ✨daylog-node
React 화면단, Node.js + express 서버단을 구현하고 RESTful API를 디자인해 mongodb로 user 기능(회원가입,로그인, 로그아웃, JWT 발급 및 검증)과 post기능(포스트 작성, 포스트 조회, 포스트 삭제, 포스트 수정)을 구현한 프로젝트.

https://daylog-node.com/

(AWS EC2 배포 -> 도메인 연결)


<br>

<h3><user 기능></h3>
<div>
<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/8b3c4b12-2c5a-4994-9192-7cdc8f421ebd" width="30%"/>
<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/6f998d7c-bfeb-467b-8233-7cce07c59221" width="30%"/>
<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/e55215b5-e16f-4712-a18e-abc78783ad62" width="30%"/>
</div>


<br>

<h3><post 기능></h3>
<div>
<b> ✅ 포스트 작성</b>
	
<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/3e1cc019-0c99-4aa1-b091-80b74295c06f"/>

<br>
<br>
<b> ✅ 포스트 조회</b>

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/8b783769-0921-4000-a202-ebaaa03609f9"/>

<br>
<br>
<b> ✅ 포스트 수정</b>

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/d7a81670-77ba-46a9-a7a9-8d725115e859"/>

<br>
<br>
<b> ✅ 포스트 삭제</b>

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/29b16c71-8d5a-4061-ba9e-57adf7058616"/>
</div>



<br>
<br>

## 프로젝트 소개
REST API와 서버 기능을 구현해보고싶어 만들게 된 프로젝트로, Node.js(express)로 서버 환경을 구축하고 MongoDB로 데이터베이스를 관리한다.
일상을 간단하게 공유하는 게시판 형식의 웹사이트로 회원가입과 로그인/로그아웃 및 JWT를 발급해 사용자 보안을 강화했다. 로그인 후 포스트 작성, 삭제, 수정이 가능하다.

<br>

## file-tree
### ⚙client
```javascript
📦src
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜AuthForm.jsx
 ┃ ┃ ┣ 📜AuthTemplate.jsx
 ┃ ┃ ┣ 📜LoginForm.jsx
 ┃ ┃ ┗ 📜RegisterForm.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜ListBox.jsx
 ┃ ┣ 📜StyledButton.jsx
 ┃ ┣ 📜UpdateBox.jsx
 ┃ ┗ 📜WriteBox.jsx
 ┣ 📂font
 ┃ ┣ 📜Pretendard-Bold.woff
 ┃ ┗ 📜Pretendard-Medium.woff
 ┣ 📂pages
 ┃ ┣ 📜ListPage.jsx
 ┃ ┣ 📜LoginPage.jsx
 ┃ ┣ 📜MainPage.jsx
 ┃ ┗ 📜RegisterPage.jsx
 ┣ 📂redux
 ┃ ┣ 📂action
 ┃ ┃ ┣ 📜postAction.js
 ┃ ┃ ┗ 📜userAction.js
 ┃ ┣ 📂slice
 ┃ ┃ ┣ 📜post.js
 ┃ ┃ ┗ 📜user.js
 ┃ ┗ 📜store.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜setupProxy.js
 ```

### ⚙server
```javascript
📦server
 ┣ 📂middleware
 ┃ ┣ 📜jwtChecker.js
 ┃ ┗ 📜userChecker.js
 ┣ 📂models
 ┃ ┣ 📜post.js
 ┃ ┣ 📜user.js
 ┣ 📂routes
 ┃ ┣ 📜post.js
 ┃ ┣ 📜user.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜server.js
 ┣ 📜.gitignore
 ┗ 📜.env
 ```
<br>

## 🧾목차
* [⚙개발 환경](#개발-환경)
* 🚩주요 기능
  - [express, mongodb, react 연결](#express-mongodb-react-연결)
  - [user 기능 Restful API](#user-기능-Restful-API)
    - 회원가입(Post) - '/register'
    - 로그인(Post)  - '/login'
    - 로그아웃(Post) - '/logout'
  - [post 기능 Restful API](#post-기능-Restful-API)
    - 포스트 작성(Post) - '/write'
    - 포스트 조회(Get) - '/list'
    - 포스트 삭제(Delete) - '/:id'
    - 포스트 수정(Patch) - '/:id'
  - [middleware 정의](#middleware-정의)
    - jwtChecker.js(jwt 검증)
    -  userChecker.js(user 확인)
  - [사이트 배포(AWS EC2)](#사이트-배포AWS-EC2)
* [🛠개선점 & 💡해결](#개선점--해결)
  - [cors 에러](#cors-에러)
  	- http에서 https 환경으로 변경
  - [net 에러](#net-에러)
    	- 서버 요청하는 경로 변경
  - [pm2 무중단 배포 속도 개선](#pm2-무중단-배포-속도-개선)
    	- pm2 inmemory, local 버전 맞추기


<br>
<hr>
<br>

## ⚙개발 환경
<b>server:</b> node.js, express, bcrypt, cookie-parser, cors, dotenv, joi, jsonwebtoken, mongodb, mongoose

<b>front:</b> React, axios, reduxjs/toolkit, react-router-dom, styled-components

<br>
<hr>
<br>

### 💻express, mongodb, react 연결
- dotenv 설치해 .env 환경변수 연결
- cors 미들웨어 적용해 CORS 에러 방지
- mongoose.connect 로 mongoose 연결
- 4000 포트 연결
- client의 build 폴더 연결해 client 프로젝트와 연동
- '/api/user', '/api/post' 라우트 연결

<b>server>server.js</b>
```javascript
require('dotenv').config();
const { PORT, DBURI } = process.env;


//서버에서 가져온 데이터를 파싱해서 가져와줌
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(jwtChecker);

app.use(cors());
app.use(express.static(path.join(__dirname,'../client/build')));

//mongoose 연결
mongoose.connect(DBURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>{console.log("몽고db 연결 성공")})
  .catch((err)=>console.log("몽고db 연결 실패"))

const port = PORT || 4000;
app.listen(port,()=>{
  console.log(`Server running on ${port}`);
});

//router 사용
app.use('/api/user', require('./routes/user.js'));
app.use('/api/post',require('./routes/post.js'));

//res.send로 보내면 경로만 찍히므로, sendFile로 보내주어야 local3000과 동일한 화면 보임
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
프론트 단에서 setupProxy 설정해 API요청 경로에 '/api'가 존재하는 경우 http://localhost:4000 호스트로 요청 전달되게끔 설정

<b>client>setupProxy.js</b>
```javascript
module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'http://localhost:4000', 
			changeOrigin: true,
		})
	);
};
```

<br>
<hr>
<br>

### 💻user 기능 Restful API
- User 스키마, 모델, 인스턴스 매서드 정의
```javascript
const userSchema = mongoose.Schema({
  name:{
    type: String,
    maxlength: 50
  },
  password:{
    type: String,
    minlength: 5
  },
  access_token: {
    type: String,
  },
  fresh_token: {
    type: String,
  },
});

//로그인 시 비밀번호 암호화 -> db에 저장된 비밀번호와 비교
userSchema.methods.comparePassword = async function(plainPassword){
  try{
    const isMatch = await bcrypt.compare(plainPassword, this.password);
    return isMatch;
  }catch(err){
    throw err;
  }
}; 


//스태틱 메서드로 데이터베이스에서 사용자 검색(findOne)
userSchema.statics.findByUsername = async function(name){
  const user = await this.findOne({name});
  console.log('findByUsername',user);
  return user
}; 
```
- JWT 발급
```javascript
userSchema.methods.generateToken = function(){
  const token = jwt.sign(
    {_id: this.id, name: this.name},//첫번째 페이로드에 넣을 데이터
    process.env.SECRET_KEY,//개인키
    {expiresIn:'7d'}//유효기간
  );
  return token;
}
```

<br>
<br>

<details>
<summary>✅ <b>회원가입(Post) - '/register'</b></summary>
<div markdown="1">
	
- ⭐server
    - Joi 라이브러리 유효성 검사
    - 존재하는 아이디인지 확인(findOne)
    - bcrypt 비밀번호 해시화
```javascript
const saltRounds = 10;

router.post('/register',async(req,res)=>{
    const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required()
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error);
    return;
  }
  //유효성 검사 성공 시
  try{
    const existUser = await User.findOne({name: req.body.name});
    if(existUser){
      console.log('이미 존재하는 아이디입니다.');
      res.send({success: false, message:'이미 존재하는 아이디입니다.'})
      return;
    }

    //비밀번호 해시화
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = new User({
      name: req.body.name,
      password: hashedPassword
    });

    await user.save();

    return res.status(201).send({
      success:true,
      user
    });
  }catch(err){
    res.json({success: false, error: err.message})
  }
});

```
- ⭐client
  - 회원가입, 로그인, 포스트 작성 등의 기능은 redux/toolkit로 액션 함수 생성해 관리
- <b>userSlice</b>
```javascript
        const initialState = {
  register: {
    name: '',
    password: '',
    passwordConfirm: '',
    userData:null,
    error: null
  },
  login: {
    name: '',
    password: '',
    userData:null,
    error: null
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    changeField: (state, action) => {//리듀서 함수는 항상 두개의 인자 받음(state-현재상태, action-디스패치된 액션 객체)
      const {form, key, value} = action.payload;//액션에 포함된 데이터(form-폼이름, key-필드이름, value-변경할값)
      state[form][key] =  value;//현재 상태의 form의 특정 key를  value값으로 업데이트
    },
    initializeForm:(state, action) => {
      const form = action.payload;
      state[form] = {...initialState[form]};//현재 state의 form 초기화
    },
  },
  extraReducers:(builder)=>{
    //loginUser 성공
    builder.addCase(loginUser.fulfilled,(state,action)=>{
      state.login.userData = action.payload;//response.data를 userData에 저장
      state.login.error = null;
    });

    //loginUser 실패
    builder.addCase(loginUser.rejected,(state,action)=>{
      if(action.payload){
        state.login.error = action.payload;
      }else{
        state.login.error = action.error.message;
      }
    });
    
    // registerUser 요청이 성공한 경우
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.register.userData = action.payload; 
      state.register.error = null;
    });

    // registerUser 요청이 실패한 경우
    builder.addCase(registerUser.rejected, (state, action) => {
      if(action.payload){
        state.register.error = action.payload;
      }else{
        state.register.error = action.error.message;
      }
    });
  }
});

export const {
  changeField,
  initializeForm,
  setUser
} = userSlice.actions;
export default userSlice.reducer;
```
    
- <b>createAsyncThunk로 비동기 액션 함수 처리</b>

```javascript
export const registerUser = createAsyncThunk('/api/user/register', async (userData, {rejectWithValue }) => {
  console.log('registerUser',userData); 
  try{
    const response = await axios.post('/api/user/register', {
      name: userData.name,
      password: userData.password,
    });
    console.log('registerUser',response.data);
    return response.data;
  }catch(err){
    let error = err;
    if(!error.response){
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
```
- register 처리할 컴포넌트에서 userDispatch로 registerUser 비동기 액션 함수 호출해 api 요청 전달
```javascript
const onSubmit = async(e) =>{
    e.preventDefault();
    const {name, password,passwordConfirm} = form;
    console.log('회원가입 제출됨');

    if (!name || !password || !passwordConfirm) {
      // 아이디, 비밀번호, 비밀번호 확인 중 하나라도 비어있을 때
      return alert('아이디, 비밀번호, 비밀번호 확인은 필수 입력 항목입니다.');
    }

    if(password !== passwordConfirm){
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    try{
      await dispatch(registerUser(form))
        .unwrap()
        .then(()=>{
          alert('회원가입에 성공했습니다! 로그인 페이지로 이동합니다.');
        })
        .then((res)=>{
          navigate('/login');
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        });
    }catch(error){
      console.log(error)
      alert('회원가입에 실패했습니다.');
    }
  };

```

<br>
<br>
</div>
</details>

<details>
<summary>✅<b>로그인(Post)  - '/login'</b></summary>
<div markdown="1">

- ⭐server
  - 입력값으로 존재하는 아이디 불러옴(findByUsername)
  - 찾아온 아이디 비밀번호 확인(bcrypt.compare)
  - jwt 발급해 쿠키 저장
```javascript
router.post('/login',async(req,res)=>{
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(401).send('이름과 비밀번호는 필수값입니다.');
    return;
  }
  try{
    const user = await User.findByUsername(name);
    if (!user) {
      res.status(401).send('유효한 아이디가 아닙니다.');
      console.log('findByUsername 같은 아이디 없음', user);
      return;
    }

    //동일한 이름 있는 경우 비밀번호 비교
    const valid = await bcrypt.compare(password, user.password);
    if(!valid){
      res.status(400).send('잘못된 비밀번호입니다.');
        return;
    }

    //jwt 발급
    const accessToken = user.generateToken();

    res.cookie('access_token',accessToken,{
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
    console.log('로그인할때 jwt',accessToken)

    res.status(200).json({
      loginSuccess: true,
      user
    })

  }catch(err){
    res.json({success: false, error: err.message})
  }
});
```
- ⭐client
    - createAsyncThunk로 정의한 비동기 액션 함수
```javascript
export const loginUser = createAsyncThunk('/api/user/login', async (userData, {rejectWithValue }) => {
  try{
    const response = await axios.post('/api/user/login', {
      //이 값들이 reducer에서 action.payload
      name: userData.name,
      password: userData.password,
    });
    return response.data;
  }catch(err){
    let error = err;
    if(!error.response){
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
```
  - usedispatch로 loginUser 호출
```javascritp
const onSubmit = async(e) =>{
    e.preventDefault();
    const {name,password } = form;

    if (!name || !password) {
      return alert('아이디, 비밀번호는 필수 입력 항목입니다.');
    }
    try{
      await dispatch(loginUser(form))
        .unwrap()
        .then((res)=>{
          navigate('/list');
        })
        .catch((err)=>{
          console.log(err)
        });
    }catch(error){
      console.log(error)
      alert('로그인에 실패했습니다.');
    }
  };
```

<br>
<br>

</div>
</details>

<details>
<summary>✅ <b>로그아웃(Post) - '/logout'</b></summary>
<div markdown="1">

- ⭐server
    - 쿠키 초기화로 로그아웃
```javascript
router.post('/logout', (req,res)=>{
  res.clearCookie('access_token');
  res.status(204).send();
  console.log('로그아웃 되었습니다.')
});
```
- ⭐client
  - createAsyncThunk로 로그아웃 비동기 액션 함수 정의
```javascript
export const logoutrUser = createAsyncThunk('/api/user/logout', async (_, thunkAPI) => { 
    const response = await axios.post('/api/user/logout');
    return response.data;
});
```
   - usedispatch로 logoutrUser 호출
```javascript
const handleLogout = () =>{
    try{
      dispatch(logoutrUser());
      setIsLoggedOut(true);
      alert('로그아웃 처리되었습니다.');
    }catch(err){
      setIsLoggedOut(false)
    }
  };
```

</div>
</details>

<br>
<hr>
<br>

### 💻post 기능 Restful API
- Post 스키마, 모델 정의
```javascript
const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  publishedDate:{
    type: Date,
    default: Date.now,//현재 날짜를 기본값으로 지정
  },
  user:{
    _id: mongoose.Types.ObjectId,
    name: String
  }
});

//스키마로 모델 생성
const Post = model('Post',PostSchema);
module.exports = {Post};
```

<br>

<details>
<summary>✅ <b>포스트 작성(Post) - '/write'</b></summary>
<div markdown="1">

- ⭐server
  - Joi 라이브러리 유효성 검사
  - Post.create 로 포스트 추가
```javascript
router.post('/write', async(req, res)=>{
  const Schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required()
  });

  try{
    const {title, body} = await Schema.validateAsync(req.body);
    const post = await Post.create({title,body});
    console.log("포스트작성에 user추가",post )
    res.json(post);
  }catch(err){
    res.json({success: false, error: err.message})
  }
});
```
- ⭐client
  - postSlice 정의
```javascript
const postSlice = createSlice({
  name:"post",
  initialState: [],
  reducers: {},
  extraReducers:(builder)=>{
    //writePost 성공
    builder.addCase(writePost.fulfilled,(state,action)=>{
      state.push(action.payload)
    });

    //writePost 실패
    builder.addCase(writePost.rejected,(state,action)=>{
      if(action.payload){
        state.error = action.payload;
      }else{
        state.error = action.error.message;
      }
    });

    //fetchPosts 성공
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload.reverse();
    });
  }
});

export const {getPost,addPost} = postSlice.actions;
export default postSlice.reducer;
```
- createAsyncThunk로 포스트 작성하는 비동기 액션 함수 writePost 정의
```javascript
export const writePost = createAsyncThunk('/api/post/write', async (postData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/post/write', {
      title:postData.title,
      body: postData.body,
    });
    return response.data;
  } catch (err) {
    let error = err;
    if(!error.response){
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
```
- useDispatch로 writePost 호출
```javscript
const handleWritePost = async() =>{
    try {
      await dispatch(writePost({ title, body})); //글 작성
      await dispatch(fetchPosts()); //글 조회
      setTitle('');
      setBody('');
      
    } catch (error) {
      console.error('Error writing post: ', error);
    }
  }
```

<br>
<br>

</div>
</details>

<details>
<summary>✅ <b>포스트 조회(Get) - '/list'</b></summary>
<div markdown="1">

- ⭐server
```javascript
router.get('/list', async(req, res)=>{

  try{
    const posts = await Post.find()
    res.json({ success: true, posts: posts }); 
  }catch(err){
    res.json({success: false, error: err.message})
  }
});
```
- ⭐client
 - createAsyncThunk로 포스트 조회하는 비동기 액션 함수 fetchPosts 정의
 - posts 에 담긴 post 목록 map 으로 화면 출력
```javascript
const dispatch = useDispatch();
const posts = useSelector((state) => state.post);

export const fetchPosts = createAsyncThunk('/api/post/list', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/post/list');
    return response.data.posts;
  } catch (err) {
    let error = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
```
  - - useDispatch로 fetchPosts 호출
```javascript
  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch]);
```

<br>
<br>

</div>
</details>

<details>
<summary>✅ <b>포스트 삭제(Delete) - '/:id'</b></summary>
<div markdown="1">

- ⭐server
  - findByIdAndRemove : mongoose에서 제공하는 메서드로 특정 id의 포스트를 삭제함
```javascript
router.delete('/:id', async(req, res)=>{
  const { id } = req.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    res.status(204).send();
  } catch (err) {
    res.json({success: false, error: err.message})
  }
});
```
- ⭐client
```javascript
const handleDelete = async(postId) => {
    const confirmed = window.confirm('정말로 이 포스트를 삭제하시겠습니까?');
    if(confirmed){
      try{
        await axios.delete(`/api/post/${postId}`);
        await dispatch(fetchPosts());
      } catch (error) {
        console.error('포스트 삭제에 실패했습니다:', error);
      }
    } else {
      console.log('포스트 삭제가 취소되었습니다.')
    }
  };
```

<br>
<br>

</div>
</details>

<details>
  <summary>✅ <b>포스트 수정(Patch) - '/:id'</b></summary>
  <div markdown="1">

-⭐server
  -  findByIdAndUpdate : mongoose에서 제공하는 메서드로 특정 id의 포스트를 업데이트함
```javascript
router.patch('/:id', async(req, res)=>{
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
  });
  const { id } = req.params;
  try{
    const validateData = await schema.validateAsync(req.body);
    const updatedPost = await Post.findByIdAndUpdate(id, validateData, {
      new: true
    }).exec();
    if(!updatedPost){
      res.status(404).send();
      return;
    }
    res.json(updatedPost);
  } catch(err){
    res.json({success: false, error: err.message})
  }

});
```
-⭐client
  - 수정버튼 클릭 시 handleEditClick이 호출되고 EditPostId에 PostId가 담김
```javascript
  const handleEditClick = (postId) => () => {
    setEditPostId(postId);
  };
```
  - post의 id와 EditPostId 가 같은 경우 updateBox 컴포넌트가 렌더링되고 handleUpdate props로 전달
```javascript
const handleUpdate = async(postId, updateData)=>{
    try{
      await axios.patch(`/api/post/${postId}`, updateData);
      await dispatch(fetchPosts());
      setEditPostId(null); //수정 후 editingPostId를 초기화하여 수정 상태 종료
    }catch (error) {
      console.error('포스트 수정에 실패했습니다:', error);
    }
  };

const isEditing = post._id === editPostId;

//생략

{isEditing ? (
              <UpdateBox 
                postId = {post._id}
                initialTitle={post.title}
                initialBody={post.body}
                onUpdate={handleUpdate}
                onCancel={handleCancelEdit}
              />
            )
```
  - UpdateBox 의 수정 버튼 클릭하면 onUpdate에 postId와 수정 내용 전달되어 업데이트 됨
```javascript
const UpdateBox = ({postId,initialTitle,initialBody,onUpdate,onCancel}) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

   const handleUpdateClick = () => {
    onUpdate(postId, { title, body });
  };

//생략
  <StyledButton onClick={handleUpdateClick}>수정</StyledButton>

```
</div>
</details>

<br>
<hr>
<br>

### 💻middleware 정의
- jwtChecker.js(JWT 검증)
  - JWT 검증 미들웨어 정의 및 app.use 적용
```javascript
const jwtChecker = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next();
  try {
    // verify
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = {
      _id: decoded._id,
      name: decoded.name
    };
    const now = Math.floor(Date.now() / 1000);
    
    // 만료일 1일 남았을 때 재발급
    if (decoded.exp - now < 60 * 60 * 24) {
      const user = await User.findById(decoded._id); // id로 user 정보를 찾아와서
      const freshToken = user.generateToken(); // 토큰 발급
      res.cookie('fresh_token', freshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
        httpOnly: true
      });
    return next();
    }
    console.log('올바른 토큰', decoded);
    return next();
  } catch (error) {
    console.log('error', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = jwtChecker;
```
```javascript
app.use(jwtChecker);
```
- userChecker.js(user 존재하는지 확인)
```javascript
const userChecker = (req, res, next) => {
  const { user } = req;
  if (!user) {
    res.status(401).send(); // Unauthorized
    return;
  }
  console.log(userChecker,'로그인 되어있음')
  return next();
};

export default userChecker;
```

<br>
<hr>
<br>

### 💻사이트 배포(AWS EC2)
- 사이트 배포는 AWS EC2 인스턴스 접속해 git clone으로 프로젝트 가져와 서버 연결
- AWS 로 사이트를 배포하면 http로 만들어지는데 사이트의 보안을 위해 도메인 구매해 https로 변경
- 서버 무중단 배포 위해 pm2 설정

  
<br>
<hr>
<br>

### 🛠개선점 & 💡해결
- <b>cors 에러 (✅해결)</b>

그 유명한 CORS 에러를 이번에 아주 제대로 경험했다.. 해결 방법은 크게 2가지가 있는 듯하다.
1. header 설정 - ```res.header("Access-Control-Allow-Origin", "*");``` 와 같이 header를 직접 설정해주기
2. cors 미들웨어 설치 - ```npm install --save cors``` cors미들웨어를 설치해 app.use로 적용시켜주기

나는 둘 다 해보았지만 header를 설정하는 것보다 cors 미들웨어를 사용하는 것이 더 간편해 이렇게 사용했고 혹시 둘 다 설정하는 것은 오히려 cors 충돌이 날 수 있어 피해야한다고 한다. 
```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(jwtChecker);

const cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname,'../client/build')));
```
그러나 이렇게 설정했는데도 계속 CORS 에러가 발생해서 한참 헤맸는데 결국 원인을 찾았다... 클라이언트 단에서 axios.post/get 등 api 요청하는 주소를 'http://localhost:4000/api/user/write' 처럼 설정을 해놓아서 연결이 안되었던 것이다. 이 후 아래와 같이 수정하니 해결되었다..

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/b32235c0-4fd7-459d-b1f5-35f8158e8657" width="70%"/>

<br>
<br>

- <b>net 에러 (✅해결)</b>

CORS 문제를 해결하고 http의 안전성을 높이기 위해 https를 적용하기로 했다. https란 기존 http 주소에 ssl인증서를 적용하게 되는 방식인데, 내가 사이트를 배포한 aws ec2 인스턴스는 기본적으로 http가 적용되기 때문에 도메인을 따로 구매해서 연결해 https로 적용시켜주어야 했다. 간단한 진행 순서는 <b>route53 도메인 구매 -> 인증서 발급 -> Target Group 생성 -> ALB(Application Load Balancer) 세팅 -> ALB와 도메인 연결 </b>  로 https가 적용된 도메인 주소를 얻을 수 있었다!! 

<br>

그렇게 도메인 주소로 들어가 서버에 요청을 했는데 이번에는 ```net::ERR_CONNECTION_REFUSED``` 이런 에러가 발생했다. 원인은 클라이언트 단에서 redux로 비동기 액션 함수를 정의했는데 thunk의 첫번째 인자로 전달된 문자열과 axios 요청 주소가 달라 생긴 에러였다. createAsyncThunk 에서 첫번째 문자열은 단순히 식별자로 사용되는 걸로 생각하고 axios 요청 주소와 정확하게 맞추지 않았었는데, 이렇게 두개가 다를 경우 클라이언트가 원하는 서버 엔드포인트로 요청을 보내지 않을 수 있고, 응답을 제대로 반환하지 못한다고 한다. 

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/b4fd95ee-c6b4-4c25-b61c-5afecf27b730" width="70%"/>

(기존 createAsyncThunk의 문자열 '/post/write' 에서 수정)

리덕스의 thunk 사용법에 대해 제대로 인지하지 못해 발생한 문제라고 생각한다. 앞으로 무언가 새로운 기능을 구현할 때는 꼭 기초부터 숙지하고 적용하자!!

<br>

- <b>pm2 무중단 배포 속도 개선 (✅해결)</b>

도메인 연결까지 완료하고 우분투 서버 종료 시에도 계속 유지되도록 무중단 배포를 설정해야했다. node.js를 사용하는 경우 가장 많이 사용하는 pm2를 설치해 적용했는데 pm2를 사용안하고 서버 요청을 했을 때보다 훨~씬 느리게 응답을 받아오는 문제가 발생했다.(체감 로그인 하는데만 10초..?) pm2의 state를 살펴보니 

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/21b9e211-a69e-466d-8906-14433787e1b6"/>

이렇게 in memory pm2와 local pm2의 버전이 다른 걸 확인 할 수 있었다. (이미지는 옛날버전으로 참고만!) 이 두개의 버전이 다른것이 문제인 것 같아 ```pm2 upgrade``` 를 진행해보았으나 적용이 되지 않았고, 아예 pm2 프로세스를 중지하고 ```pm2 kill```, 다시 설치해 문제를 해결했다. 

<img src="https://github.com/Hyemin0102/Daylog-node/assets/128768462/7815691c-1aeb-472e-b283-ad920704779d"/>

이 후 버전 차이 없어지고 빠르게 정상 작동!




