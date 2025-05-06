using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SkylerCounseling.API.Services;
using SkylerCounseling.API.Dtos;

namespace SkylerCounseling.API.Controllers;

 [Route("api/[controller]")]
 [ApiController]
 public class TextController(ITextService service) : ControllerBase
 {
	  [HttpGet("", Name = nameof(GetText))]
	  public async Task<AppTextDto> GetText()
	  {
		  return await service.GetText();
	  }
 }
