package com.fortegroup.shop.dao;

import com.fortegroup.shop.bean.User;

public interface UserDAO {

    User save(User user);

    User findByEmail(User user);
}
