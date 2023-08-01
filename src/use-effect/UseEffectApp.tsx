import { useEffect, useState } from 'react';
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';

const DependenyTest = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState({ name: '', selected: false });

  // const user = useMemo(
  //   () => ({
  //     name: state.name,
  //     selected: state.selected,
  //   }),
  //   [state.name, state.selected]
  // );

  useEffect(() => {
    console.count('useEffect');
  }, [state.name, state.selected]);

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`Name: ${state.name}, Selected: ${state.selected}`}
    </>
  );
};

const UpdateNumberTest = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.count('useEffect');
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{number}</div>;
};

const Posts = () => {
  const [posts, setPosts] = useState<Array<Record<string, string>>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        alert('posts fetched');
        setPosts(data);
        console.log(data);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

const UserDetail = () => {
  const [user, setUser] = useState<Record<string, string>>({});
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          throw err;
        }
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
};

const User = () => {
  return (
    <>
      <nav>
        <Link to="/user/1">fetch user 1</Link>
        <Link to="/user/2">fetch user 2</Link>
        <Link to="/user/3">fetch user 3</Link>
      </nav>

      <Outlet />
    </>
  );
};

/**
 * All useEffect Mistakes Every Junior React Developer Makes
 *
 * @ref https://www.youtube.com/watch?v=QQYeipc_cik
 */
const UseEffectApp = () => {
  return (
    <>
      <nav>
        <Link to="/dependency">Go to dependency</Link>
        <Link to="/UpdateNumberTest">Go to UpdateNumberTest</Link>
        <Link to="/posts">Go to posts</Link>
        <Link to="/user">Go to user</Link>
      </nav>

      <h1>UseEffectApp</h1>
      <hr />

      <Routes>
        <Route path="/dependency" element={<DependenyTest />} />
        <Route path="/UpdateNumberTest" element={<UpdateNumberTest />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="/user"
          element={<User />}
          children={<Route path="/user/:id" element={<UserDetail />} />}
        />
      </Routes>
    </>
  );
};

export default UseEffectApp;
