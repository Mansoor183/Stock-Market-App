package Stock.StockBackend.controller;

import Stock.StockBackend.model.Buy;
import Stock.StockBackend.service.BuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/buy")
public class BuyController {
    private final BuyService buyService;
    @Autowired
    public BuyController(BuyService buyService){
        this.buyService=buyService;
    }

    @PostMapping("/post")
    public Buy buyStock(@RequestBody Buy buy){
        return buyService.saveBuy(buy);
    }

    @GetMapping("/get")
    public List<Buy> getAllBuys(){
        return buyService.getAllBuys();
    }

    @GetMapping("get/{id}")
    public Optional<Buy> getBuyNyId(@PathVariable Long id){
        return buyService.getBuyNyId(id);
    }
}
