package com.yiwanjia.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yiwanjia.common.pojo.EUDataGridResult;
import com.yiwanjia.common.pojo.TaotaoResult;

import com.yiwanjia.dao.TbBannerMapper;
import com.yiwanjia.pojo.TbBanner;
import com.yiwanjia.pojo.TbBannerExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class BannerService{
    @Autowired
    private TbBannerMapper tbBannerMapper;

    /**
     * 添加轮播图信息
     * @param banner
     * @return
     */
    public TaotaoResult addBanner(TbBanner banner) {
        banner.setCreatetime(new Date());
        banner.setUpdatetime(new Date());
        banner.setStatus(1);
        tbBannerMapper.insert(banner);
        return TaotaoResult.ok();
    }

    /**
     * 分页获取轮播图信息
     * @param page 页码
     * @param rows 数据行数
     * @return EUDataGridResult
     */
    public EUDataGridResult getBannerList(int page,int rows){
        //创建查询条件
        TbBannerExample tbBannerExample = new TbBannerExample();
        //分页处理
        PageHelper.startPage(page,rows);
        List<TbBanner> list = tbBannerMapper.selectByExample(tbBannerExample);

        //创建返回值对象
        EUDataGridResult euDataGridResult = new EUDataGridResult();
        euDataGridResult.setRows(list);

        //取记录总条数
        PageInfo<TbBanner> pageInfo = new PageInfo<>();
        euDataGridResult.setTotal(pageInfo.getTotal());
        //返回查询结果
        return euDataGridResult;
    }
}
