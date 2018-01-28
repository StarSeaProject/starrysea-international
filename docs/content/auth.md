### 创建一个新的管理员

创建一个新的管理员🆕 **需要管理员权限**


```endpoint
POST /users/create
```

属性 | 介绍
---|---
`username` | (必填) 用户名
`password` | (必填) 密码

#### Example response

```json
{
    "success": true,
    "response": {
        "_id": "{对象ID}"
    }
}
```
### 登陆

登陆并返回cookie



```endpoint
POST /users/login
```

属性 | 介绍
---|---
`username` | (必填) 用户名
`password` | (必填) 密码

#### Example response

```json
{
    "success": true
}
//Cookie名称:"token"
```

### 检测是否已经登陆

检查是否登陆

```endpoint
GET /users/status
```

#### Example response

```json
{
    "success": true,
    "response": {
        "admin": true,
        "_id": "5a6a3adfd63e25e9d989fdbb",
        "username": "admin"
    }
}
```

